function retry(timer) {
  console.log('retry', timer);
  setTimeout(() => retry(timer * 2), timer);
}
retry(1000);