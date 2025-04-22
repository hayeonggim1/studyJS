function f1() {
  console.log(this);
  this.alert();
  window.alert();
  alert();
}
