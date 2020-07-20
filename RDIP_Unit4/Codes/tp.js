function new1(str) { 
  let set = new Set(str.split(' '));
  return set.size;
}
document.write((new1('as as de we re')));