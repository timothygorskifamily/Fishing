export function withBase(path = "/") {
  if (
    path.startsWith("http") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("sms:") ||
    path.startsWith("#")
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.replace(/^\/+/, "");

  return cleanPath ? `${cleanBase}${cleanPath}` : cleanBase;
}

export function imagePath(fileName: string) {
  const clean = fileName.replace(/^\/?images\//, "");
  return withBase(`/images/${clean}`);
}

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function smsHref(phone: string) {
  return `sms:${phone.replace(/[^\d+]/g, "")}`;
}

export function emailHref(email: string) {
  return `mailto:${email}`;
}

export function calUrl(calComLink: string) {
  if (calComLink.startsWith("http")) {
    return calComLink;
  }

  return `https://cal.com/${calComLink.replace(/^\/+/, "")}`;
}

export function absoluteUrl(path: string, origin: URL | string) {
  return new URL(withBase(path), origin).toString();
}
