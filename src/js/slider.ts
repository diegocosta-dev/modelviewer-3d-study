const slider = () => ({
  switchSrc(element: HTMLElement, name: string) {
    const modelViewer = document.querySelector<any>("model-viewer");
    
    const base = "./assets/" + name;
    modelViewer.src = base + '.glb';
    modelViewer.poster = base + '.webp';

    const slides = document.querySelectorAll<HTMLElement>(".slide");
    slides.forEach((element) => { element.classList.remove("selected"); });
    element.classList.add("selected");

    document.querySelector<HTMLElement>(".slider")?.addEventListener('beforexrselect', (ev: Event) => {
      // Keep slider interactions from affecting the XR scene.
      ev.preventDefault();
    });
  },

  switchSkybox(element: HTMLElement, texture: string) {
    const modelViewer = document.querySelector<any>("model-viewer");
    
    const path = "./textures/" + texture;
    modelViewer.skyboxImage = path;

    const slides = document.querySelectorAll<HTMLElement>(".slide");
    slides.forEach((element) => { element.classList.remove("selected"); });
    element.classList.add("selected");

    document.querySelector<HTMLElement>(".slider")?.addEventListener('beforexrselect', (ev: Event) => {
      // Keep slider interactions from affecting the XR scene.
      ev.preventDefault();
    });
  }
})

export default slider