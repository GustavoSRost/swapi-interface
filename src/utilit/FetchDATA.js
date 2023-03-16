async function fetchPageDATA() {
  this.loading = true;
  const component = this.$route.path.slice(1);
  if (window.localStorage.getItem(component) === null) {
    const fetchData = await fetch(`https://swapi.dev/api/${component}/?page=1`);
    const data = await fetchData.json();
    this.planets = data;
    window.localStorage.setItem(component, JSON.stringify(data));
  } else {
    this.planets = JSON.parse(window.localStorage.getItem(component));
  }
  this.loading = false;
}
export default fetchPageDATA;
