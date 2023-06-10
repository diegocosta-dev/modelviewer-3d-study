const router = (event: Event): void => {
  event.preventDefault();

  const target = event.target as HTMLAnchorElement;
  if (target) {
    const href = target.href;
    window.history.pushState({}, "", href);
  }

  handleLocation();
};

const routes: Record<string, string> = {
  404: "./src/error/404.html",
  "/": "./src/pages/slider.html",
};

const handleLocation = async (): Promise<void> => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const response = await fetch(route);
  const html = await response.text();
  const mainPageElement = document.getElementById('main-page');
  if (mainPageElement) {
    mainPageElement.innerHTML = html;
  }
};

window.onpopstate = handleLocation;

handleLocation();