let i = Math.floor(Math.random() * 100);

switch (true) {
  case (i % 3 === 0 && i % 5 === 0):
    console.log('3と5の倍数です');
    break;
  case (i % 3 === 0):
    console.log('3の倍数です');
    break;
  case (i % 5 === 0):
    console.log('5の倍数です');
    break;
  default:
    console.log(i);
}