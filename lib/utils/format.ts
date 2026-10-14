// Pure formatting and normalisation functions for contact data.

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const national = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  if (national.length === 10) {
    return `+91 ${national.slice(0, 5)} ${national.slice(5)}`;
  }
  return phone;
}

export function phoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const national = digits.length === 12 && digits.startsWith("91") ? digits.slice(2) : digits;
  return `tel:+91${national}`;
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
