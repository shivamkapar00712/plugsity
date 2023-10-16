setShareLinks();
const emailLink = 'mailto:?subject=Join us on our website&body=Our platform is bringing small businesses worldwide together under one roof - Plugsity. Shop products, services, and events from across the globe, all in one place! 🚀 Embrace the power of community and support local entrepreneurs everywhere';

function socialWindow(url) {
  var left = (screen.width - 570) / 2;
  var top = (screen.height - 570) / 2;
  var params =
    "menubar=no,toolbar=no,status=no,width=570,height=570,top=" +
    top +
    ",left=" +
    left;
  // Setting 'params' to an empty string will launch
  // content in a new tab or window rather than a pop-up.
  // params = "";
  window.open(url, "NewWindow", params);
}

function setShareLinks() {
  var pageUrl = encodeURIComponent(document.URL);


  const link = encodeURI(window.location.href);
  const msg = encodeURIComponent('A New way to shop small');
  const title = encodeURIComponent('Article or Post Title Here');

  // const fb = document.querySelector('.facebook');
  // fb.href = `https://www.facebook.com/share.php?u=${link}`;
  // socialWindow(url);

  // const twitter = document.querySelector('.twitter');
  // twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

  // const linkedIn = document.querySelector('.linkedin');
  // linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;



  // const whatsapp = document.querySelector('.whatsapp');
  // whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;



  var msgtweet = encodeURIComponent(
    $("meta[property='og:description']").attr("content")
  );

  $(".social-share.facebook").on("click", function () {
    url = "https://www.facebook.com/sharer.php?u=" + 'https://www.facebook.com/Plugsity';
    socialWindow(url);
  });

  $(".social-share.twitter").on("click", function () {
    url = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${msg}&hashtags=plugsity`;
    socialWindow(url);
  });

  $(".social-share.linkedin").on("click", function () {
    url = `https://www.instagram.com/plugsity/`;
    socialWindow(url);
  });

  $(".social-share.email").on("click", function () {
    url = emailLink;
    socialWindow(url);
  });

  $(".social-share.copy").on("click", function (e) {
    e.preventDefault();
    var dummy = document.createElement('input'),
    text = `https://www.plugsity.com/ref=${localStorage.getItem('*&#0__2t@m')}`;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  });


}
