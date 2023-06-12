const controlers = () => ({
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
  },

  variants() {
    const modelViewerVariants: any = document.querySelector("model-viewer#suzane");
    const select = document.querySelector('#variant');

    modelViewerVariants.addEventListener('load', () => {
      const names = modelViewerVariants.availableVariants;
      console.log(names)
      for (const name of names) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select?.appendChild(option);
      }
    });

    select?.addEventListener('input', (event) => {
      //@ts-ignore
      modelViewerVariants.variantName = event.target.value === 'default' ? null : event.target.value;
    });
  }
})

export default controlers