
//Когда картинка будет загружена, сработает событие load, мы вызываем resolve() и тем самым переводим промис в состояние fulfilled
function loadImage(url) {
  return new Promise(function (resolve) {
    const image = document.createElement("img");
    image.height = 200;
    image.src = url;
    document.body.appendChild(image);
    image.addEventListener("load", resolve);
  });
}
//Вызываем функцию loadImage, она возвращает новый промис, у него вызываем метод then.
loadImage(url1).
  //Теперь then будут срабатывать только тогда, когда разрешится промис, возвращаемый функцией  loadImage
then(() => loadImage(url2)).
then(() => loadImage(url3)).
then(() => console.log("картинка3 загружена"))