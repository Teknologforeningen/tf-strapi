const sanitizePrivatePages = (privatePages) => {
  if (!privatePages) return;
  privatePages.forEach((page, index) => {
    const attributes = {
      title: page.attributes.title,
      slug: page.attributes.slug,
    };
    privatePages[index] = { ...page, attributes };
  });
};

export default sanitizePrivatePages;
