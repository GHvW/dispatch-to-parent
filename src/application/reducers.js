export function counter(count, op) {
  if (op === "+") {
    return count + 1;
  } else if (op === "-") {
    return count - 1;
  }
  return count;
}
