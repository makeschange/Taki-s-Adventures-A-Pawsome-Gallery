function getUrl(req, pathname) {
  return `${req.nextUrl.origin}${pathname}`;
}

export default getUrl;
