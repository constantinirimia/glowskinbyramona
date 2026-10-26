export function bookingEmailPayload(form) {
  const name = form.name.trim()
  const service = form.service.trim()
  const when = form.preferred.trim() || 'They are flexible on timing'
  const note = form.message.trim() || 'No extra note — they just want to get on the books.'
  const phone = form.phone.trim() || 'Not shared yet'

  return {
    _subject: `✨ New glow request from ${name} — ${service}`,
    _template: 'box',
    _captcha: 'false',
    _replyto: form.email,
    'Headline': `${name} just asked Glow Skin by Ra-Mona for a ${service}.`,
    'Client name': name,
    'Reply to this email': form.email,
    'Phone': phone,
    'Treatment they want': service,
    'Preferred day or time': when,
    'Their message': note,
    'What to do next': `Hit reply to write ${name} back, or call them if they left a number. A warm “yes, let’s get your glow on” is all they need.`,
  }
}
