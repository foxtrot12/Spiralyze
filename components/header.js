class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const links = this.getLinks();
    const headId = this.getId();
    window.addEventListener("hashchange", this.updateEndPoint.bind(this));
    window.addEventListener("popstate", this.updateEndPoint.bind(this));
    this.render(links, headId);
  }

  disconnectedCallback() {
    window.removeEventListener("hashchange", this.updateEndPoint.bind(this));
    window.removeEventListener("popstate", this.updateEndPoint.bind(this));
  }

  getLinks() {
    const linksAttr = this.getAttribute("links");
    if (!linksAttr) {
      throw new Error(`links not defined`);
    }
    return JSON.parse(linksAttr);
  }

  getId() {
    const idAttr = this.getAttribute("id");
    if (!idAttr) {
      throw new Error(`id not defined`);
    }
    return idAttr;
  }

  getEndPoint() {
    return window.location.hash || window.location.pathname;
  }

  updateEndPoint() {
    const links = this.getLinks();
    const headId = this.getId();
    const endPt = this.getEndPoint(links);
    console.log("Endpoint updated:", endPt);

    this.render(links, headId, endPt);
  }

  render(links, headId, endPt) {
    const styleLink = document.createElement("link");
    styleLink.setAttribute("rel", "stylesheet");
    styleLink.setAttribute("href", "header.css");

    const template = `
    <link rel="stylesheet" href="../styles.css" />
        <header id="${headId}" class="posAbs flex header itemsCtr wFull spcBw">
          <div class="flex itemsCtr grow spcBw">
        <svg
          class="flex logo"
          width="227"
          height="36"
          viewBox="0 0 227 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2856 17.7378H23.1663V22.4423C22.6151 22.969 21.9441 23.37 21.1532 23.6453C20.3744 23.9206 19.5476 24.0583 18.6728 24.0583C17.4267 24.0583 16.3003 23.783 15.2938 23.2323C14.2993 22.6817 13.5144 21.9215 12.9393 20.9519C12.3761 19.9823 12.0945 18.893 12.0945 17.684C12.0945 16.475 12.3761 15.3856 12.9393 14.416C13.5144 13.4464 14.2993 12.6863 15.2938 12.1356C16.3003 11.585 17.4327 11.3097 18.6908 11.3097C19.6135 11.3097 20.4582 11.4593 21.2251 11.7586C22.004 12.0459 22.669 12.4708 23.2202 13.0334L22.645 13.6439C22.1178 13.1172 21.5247 12.7401 20.8656 12.5127C20.2186 12.2733 19.4996 12.1536 18.7088 12.1536C17.6304 12.1536 16.6538 12.393 15.7791 12.8718C14.9164 13.3506 14.2394 14.015 13.7481 14.8649C13.2568 15.7029 13.0112 16.6425 13.0112 17.684C13.0112 18.7134 13.2568 19.6531 13.7481 20.503C14.2513 21.341 14.9343 22.0053 15.7971 22.4961C16.6598 22.975 17.6304 23.2144 18.7088 23.2144C20.1467 23.2144 21.3389 22.8313 22.2856 22.0652V17.7378Z"
            fill="#B3E5DA"
          />
          <path
            d="M35.8815 23.1425V23.9685H27.2002V11.3994H35.6119V12.2254H28.1169V17.1812H34.821V17.9892H28.1169V23.1425H35.8815Z"
            fill="#B3E5DA"
          />
          <path
            d="M41.6321 12.2254H37.1027V11.3994H47.0781V12.2254H42.5487V23.9685H41.6321V12.2254Z"
            fill="#B3E5DA"
          />
          <path
            d="M61.7142 20.6108H54.7045L53.1947 23.9685H51.8108L57.5623 11.3994H58.8744L64.626 23.9685H63.224L61.7142 20.6108ZM61.2289 19.5334L58.2094 12.782L55.1898 19.5334H61.2289Z"
            fill="#B3E5DA"
          />
          <path
            d="M77.2218 11.3994V23.9685H76.1254L68.0373 13.7696V23.9685H66.7073V11.3994H67.8036L75.9098 21.5983V11.3994H77.2218Z"
            fill="#B3E5DA"
          />
          <path
            d="M85.8614 11.3994H88.7731V23.9685H85.8614V11.3994Z"
            fill="#B3E5DA"
          />
          <path
            d="M103.298 11.3994V23.9685H100.908L94.6348 16.3373V23.9685H91.759V11.3994H94.1675L100.422 19.0307V11.3994H103.298Z"
            fill="#B3E5DA"
          />
          <path
            d="M108.881 13.7696H104.855V11.3994H115.819V13.7696H111.793V23.9685H108.881V13.7696Z"
            fill="#B3E5DA"
          />
          <path
            d="M127.127 21.6343V23.9685H117.385V11.3994H126.894V13.7337H120.279V16.463H126.121V18.7254H120.279V21.6343H127.127Z"
            fill="#B3E5DA"
          />
          <path
            d="M137.46 23.9685L135.034 20.4671H132.356V23.9685H129.444V11.3994H134.89C136.004 11.3994 136.969 11.585 137.784 11.9561C138.611 12.3272 139.246 12.8539 139.689 13.5362C140.132 14.2185 140.354 15.0265 140.354 15.9602C140.354 16.8939 140.126 17.7019 139.671 18.3843C139.228 19.0546 138.593 19.5693 137.766 19.9285L140.588 23.9685H137.46ZM137.406 15.9602C137.406 15.254 137.179 14.7153 136.723 14.3442C136.268 13.9611 135.603 13.7696 134.728 13.7696H132.356V18.1508H134.728C135.603 18.1508 136.268 17.9593 136.723 17.5762C137.179 17.1932 137.406 16.6545 137.406 15.9602Z"
            fill="#B3E5DA"
          />
          <path
            d="M154.757 11.3994L149.311 23.9685H146.435L141.007 11.3994H144.153L147.981 20.3773L151.863 11.3994H154.757Z"
            fill="#B3E5DA"
          />
          <path
            d="M165.549 21.6343V23.9685H155.808V11.3994H165.316V13.7337H158.701V16.463H164.543V18.7254H158.701V21.6343H165.549Z"
            fill="#B3E5DA"
          />
          <path
            d="M179.405 11.3994V23.9685H177.015L170.742 16.3373V23.9685H167.866V11.3994H170.275L176.529 19.0307V11.3994H179.405Z"
            fill="#B3E5DA"
          />
          <path
            d="M184.988 13.7696H180.962V11.3994H191.926V13.7696H187.9V23.9685H184.988V13.7696Z"
            fill="#B3E5DA"
          />
          <path
            d="M193.493 11.3994H196.404V23.9685H193.493V11.3994Z"
            fill="#B3E5DA"
          />
          <path
            d="M205.483 24.184C204.177 24.184 202.997 23.9027 201.942 23.3401C200.9 22.7774 200.079 22.0053 199.48 21.0238C198.893 20.0302 198.599 18.9169 198.599 17.684C198.599 16.451 198.893 15.3437 199.48 14.3622C200.079 13.3686 200.9 12.5905 201.942 12.0279C202.997 11.4653 204.177 11.184 205.483 11.184C206.789 11.184 207.964 11.4653 209.006 12.0279C210.049 12.5905 210.869 13.3686 211.468 14.3622C212.068 15.3437 212.367 16.451 212.367 17.684C212.367 18.9169 212.068 20.0302 211.468 21.0238C210.869 22.0053 210.049 22.7774 209.006 23.3401C207.964 23.9027 206.789 24.184 205.483 24.184ZM205.483 21.7061C206.226 21.7061 206.897 21.5385 207.496 21.2033C208.095 20.8562 208.563 20.3773 208.898 19.7668C209.246 19.1564 209.419 18.4621 209.419 17.684C209.419 16.9059 209.246 16.2116 208.898 15.6011C208.563 14.9906 208.095 14.5178 207.496 14.1826C206.897 13.8355 206.226 13.6619 205.483 13.6619C204.74 13.6619 204.069 13.8355 203.47 14.1826C202.871 14.5178 202.398 14.9906 202.05 15.6011C201.715 16.2116 201.547 16.9059 201.547 17.684C201.547 18.4621 201.715 19.1564 202.05 19.7668C202.398 20.3773 202.871 20.8562 203.47 21.2033C204.069 21.5385 204.74 21.7061 205.483 21.7061Z"
            fill="#B3E5DA"
          />
          <path
            d="M226.094 11.3994V23.9685H223.704L217.431 16.3373V23.9685H214.555V11.3994H216.964L223.219 19.0307V11.3994H226.094Z"
            fill="#B3E5DA"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.2002 35.5L17.5 35.5C7.83502 35.5 -4.2247e-07 27.665 0 18C4.2247e-07 8.33502 7.83501 0.5 17.5 0.5L27.2002 0.5V2.5H17.5C8.93959 2.5 2 9.43959 2 18C2 26.5604 8.93959 33.5 17.5 33.5L27.2002 33.5V35.5Z"
            fill="#B3E5DA"
          />
        </svg>
            <div class="flex grow contentEnd btnGroup">
              ${links
                .map(
                  (link, ind) =>
                    `<a id="${link.id}" href="${
                      link.href
                    }" class="flex cursorPtr ${
                      (endPt ? endPt === link.href : ind === 0)
                        ? " textWhite underline text700 "
                        : " text400 textGrey txtDecoNone"
                    }">${link.label}</a>`
                )
                .join("")}
            </div>
          </div>
          <div class="flex text700 call">
            <p class="flex textWhite" id="headCall">CALL NOW FOR A CONSULT</p>
            <p class="flex textGreen" id="headNum">123.456.7890</p>
          </div>
        </header>
      `;

    this.shadowRoot.innerHTML = template;
    this.attachListeners(links);
  }

  attachListeners(links) {
    links.forEach((link) => {
      const linkEl = this.shadowRoot.querySelector(`#${link.id}`);
      if (linkEl) {
        linkEl.addEventListener("click", () => {
          console.log(`${link.label} link clicked`);
          this.dispatchEvent(
            new CustomEvent("linkClick", {
              detail: link,
              bubbles: true,
              composed: true,
            })
          );
        });
      }
    });
  }
}

customElements.define("spr-header", Header);
