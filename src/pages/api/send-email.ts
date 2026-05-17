import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.error('RESEND_API_KEY is missing from environment variables');
    return new Response(JSON.stringify({ error: 'Configuración de correo incompleta (API Key faltante)' }), { status: 500 });
  }

  const resend = new Resend(apiKey);
  const contactEmail = import.meta.env.CONTACT_EMAIL || process.env.CONTACT_EMAIL || 'contacto@plomerosmultiservicios.com';
  
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Plomeros Multiservicios <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `Nuevo mensaje de contacto: ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px;">
          <h2 style="color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <div style="margin-top: 20px;">
            <p style="margin: 8px 0;"><strong style="color: #374151;">Nombre:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Teléfono:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Servicio:</strong> ${service || 'No especificado'}</p>
          </div>
          <div style="margin-top: 24px; padding: 16px; bg-color: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje:</p>
            <p style="margin: 0; color: #4b5563; line-height: 1.5;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #9ca3af; text-align: center;">Este mensaje fue enviado desde el formulario de contacto de Plomeros Multiservicios.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err: any) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Failed to send email' }), { status: 500 });
  }
};
