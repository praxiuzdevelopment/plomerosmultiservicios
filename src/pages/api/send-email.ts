import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

function isString(v: unknown): v is string {
  return typeof v === 'string';
}

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Configuración de correo incompleta' }), { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Solicitud inválida' }), { status: 400 });
  }

  const { name, email, phone, service, message } = body as Record<string, unknown>;

  if (!isString(name) || !name.trim() || name.length > 200) {
    return new Response(JSON.stringify({ error: 'Nombre inválido' }), { status: 400 });
  }
  if (!isString(email) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return new Response(JSON.stringify({ error: 'Email inválido' }), { status: 400 });
  }
  if (!isString(phone) || !/^\d{7,15}$/.test(phone.replace(/\s/g, '')) ) {
    return new Response(JSON.stringify({ error: 'Teléfono inválido' }), { status: 400 });
  }
  if (!isString(message) || !message.trim() || message.length > 5000) {
    return new Response(JSON.stringify({ error: 'Mensaje inválido' }), { status: 400 });
  }
  if (service !== undefined && service !== '' && (!isString(service) || service.length > 100)) {
    return new Response(JSON.stringify({ error: 'Servicio inválido' }), { status: 400 });
  }

  const safeName    = escapeHtml(name.replace(/[\r\n]+/g, ' ').trim());
  const safeEmail   = escapeHtml(email.trim());
  const safePhone   = escapeHtml(phone.trim());
  const safeService = isString(service) && service.trim() ? escapeHtml(service.trim()) : 'No especificado';
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

  const resend = new Resend(apiKey);
  const contactEmail = import.meta.env.CONTACT_EMAIL || process.env.CONTACT_EMAIL || 'contacto@plomerosmultiservicios.com';

  try {
    const { data, error } = await resend.emails.send({
      from: 'Plomeros Multiservicios <onboarding@resend.dev>',
      to: [contactEmail],
      subject: `Nuevo mensaje de contacto: ${safeName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px;">
          <h2 style="color: #111827; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px; margin-top: 0;">Nuevo mensaje de contacto</h2>
          <div style="margin-top: 20px;">
            <p style="margin: 8px 0;"><strong style="color: #374151;">Nombre:</strong> ${safeName}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Email:</strong> ${safeEmail}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Teléfono:</strong> ${safePhone}</p>
            <p style="margin: 8px 0;"><strong style="color: #374151;">Servicio:</strong> ${safeService}</p>
          </div>
          <div style="margin-top: 24px; padding: 16px; border-radius: 8px; border: 1px solid #f3f4f6;">
            <p style="margin: 0; font-weight: bold; color: #374151; margin-bottom: 8px;">Mensaje:</p>
            <p style="margin: 0; color: #4b5563; line-height: 1.5;">${safeMessage}</p>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #9ca3af; text-align: center;">Este mensaje fue enviado desde el formulario de contacto de Plomeros Multiservicios.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error('API error:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
};
