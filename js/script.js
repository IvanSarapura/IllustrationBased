// Main Portfolio JavaScript

// Skills Data
const skills = [
  {
    id: 1,
    name: "JavaScript",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>`,
  },
  {
    id: 2,
    name: "React",
    icon: `<?xml version="1.0" encoding="UTF-8"?>
          <svg width="569px" height="512px" viewBox="0 0 569 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-227, -256)" fill="#58C4DC" fill-rule="nonzero">
            <g transform="translate(227, 256)">
                <path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" id="Path"></path>
                <path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539" id="Shape"></path>
            </g>
            </g>
          </g>
    </svg>`,
  },
  {
    id: 3,
    name: "Node.js",
    icon: `<svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="256" height="292"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><mask id="d" fill="#fff"><use xlink:href="#b"/></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"/><mask id="g" fill="#fff"><use xlink:href="#e"/></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"/></svg>`,
  },
  {
    id: 4,
    name: "Python",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 255">
      <defs>
        <linearGradient id="pythonBlue" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
          <stop offset="0%" stop-color="#387EB8"/>
          <stop offset="100%" stop-color="#366994"/>
        </linearGradient>
        <linearGradient id="pythonYellow" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
          <stop offset="0%" stop-color="#FFE052"/>
          <stop offset="100%" stop-color="#FFC331"/>
        </linearGradient>
      </defs>
      <path fill="url(#pythonBlue)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a9.64 9.64 0 0 1 9.69 9.674 9.64 9.64 0 0 1-9.69 9.674 9.64 9.64 0 0 1-9.69-9.674 9.64 9.64 0 0 1 9.69-9.674z"/>
      <path fill="url(#pythonYellow)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a9.64 9.64 0 0 1-9.69-9.674 9.64 9.64 0 0 1 9.69-9.674 9.64 9.64 0 0 1 9.69 9.674 9.64 9.64 0 0 1-9.69 9.674z"/>
    </svg>`,
  },
  {
    id: 5,
    name: "MongoDB",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <path fill="#4DB33D" d="M128 16c-21.333 0-32 42.667-32 96s10.667 96 32 96 32-42.667 32-96-10.667-96-32-96zm-5.333 184c-2.667 10.667-5.333 21.333-5.333 24 0 5.333 2.667 10.667 5.333 13.333 0 0 0-5.333 0-10.667v-26.666zm10.666 0v26.667c0 5.333 0 10.667 0 10.667 2.667-2.667 5.333-8 5.333-13.333 0-2.667-2.666-13.333-5.333-24z"/>
      <path fill="#4FAA41" d="M128 16c-53.333 0-96 42.667-96 96s42.667 96 96 96 96-42.667 96-96-42.667-96-96-96zm0 170.667c-16 0-32-16-37.333-37.333-5.333-21.333-5.333-42.667-5.333-58.667s0-37.333 5.333-58.667C96 10.667 112 16 128 16s32-5.333 37.333 16c5.333 21.333 5.333 42.667 5.333 58.667s0 37.333-5.333 58.667c-5.333 21.333-21.333 37.333-37.333 37.333z"/>
      <path fill="#599636" d="M128 224c0 16 10.667 21.333 10.667 21.333s-5.333-5.333-5.333-10.667v-10.666zm-10.667 0v10.667c0 5.333-5.333 10.667-5.333 10.667S122.667 240 122.667 224z"/>
    </svg>`,
  },
  {
    id: 6,
    name: "Java",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346">
            <path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/>
            <path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/>
            <path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/>
            <path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/>
            <path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/>
            </svg>`,
  },
  {
    id: 7,
    name: "PostgreSQL",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 432.071 445.383"><g style="fill-rule:nonzero;clip-rule:nonzero;fill:none;stroke:#fff;stroke-width:12.4651;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4"><path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style="fill:#000;stroke:#000;stroke-width:37.3953;stroke-linecap:butt;stroke-linejoin:miter"/><path stroke="none" d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style="fill:#336791;stroke:none"/><path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329"/><path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style="stroke-linejoin:bevel"/><path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z"/><path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938"/><path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style="fill:#fff;stroke-width:4.155;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style="fill:#fff;stroke-width:2.0775;stroke-linecap:butt;stroke-linejoin:miter"/><path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435"/></g></svg>`,
  },
  {
    id: 8,
    name: "Next.js",
    icon: `<svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
<circle cx="90" cy="90" r="90" fill="black"/>
</mask>
<g mask="url(#mask0_408_139)">
<circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"/>
<path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_139)"/>
<rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_408_139)"/>
</g>
<defs>
<linearGradient id="paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
`,
  },
  {
    id: 9,
    name: "Tailwind",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>`,
  },
  {
    id: 10,
    name: "Figma",
    icon: `<svg width="54" height="80" viewBox="0 0 54 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_912_3)">
<path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83"/>
<path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF"/>
<path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E"/>
<path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262"/>
<path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE"/>
</g>
<defs>
<clipPath id="clip0_912_3">
<rect width="53.3333" height="80" fill="white"/>
</clipPath>
</defs>
</svg>
`,
  },
];

// Experience Data
const experiences = [
  {
    id: 1,
    company: "Google",
    role: "Lead Software Engineer",
    period: "Nov 2019 - Present",
    description:
      "Developed innovative solutions for Google's core search algorithms, optimizing search accuracy and user experience. Led a team of 8 engineers in implementing machine learning models that improved search relevance by 23%. Architected scalable microservices handling 10M+ queries per day with 99.9% uptime.",
    logo: "assets/google.svg",
  },
  {
    id: 2,
    company: "Youtube",
    role: "Software Engineer",
    period: "Jan 2017 - Oct 2019",
    description:
      "At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Built real-time video processing pipelines serving 2B+ users globally. Optimized database queries reducing load times by 40% and implemented caching strategies that decreased server costs by $2M annually.",
    logo: "assets/youtube.svg",
  },
  {
    id: 3,
    company: "Apple",
    role: "Junior Software Engineer",
    period: "Jun 2015 - Dec 2016",
    description:
      "Contributed to iOS app development and macOS system optimization as part of Apple's software engineering team. Developed key features for native applications, improved app performance by 15%, and collaborated with cross-functional teams to deliver seamless user experiences across Apple's ecosystem.",
    logo: "assets/apple.svg",
  },
];

// Projects Data
const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    description:
      "A powerful tool for tracking and analyzing cryptocurrency trends in real-time. Built with React, Node.js, and WebSocket for live price updates. Features advanced charting, portfolio tracking, and AI-powered market predictions with 85% accuracy rate.",
    image: "assets/project1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Stock Market Dashboard",
    description:
      "An interactive dashboard to monitor stock prices and market trends efficiently. Developed using Next.js, PostgreSQL, and TradingView APIs. Includes real-time alerts, technical analysis tools, and machine learning-based stock recommendations with 78% success rate.",
    image: "assets/project1.png",
    link: "#",
  },
];

// Typewriter Effect
class TypeWriter {
  constructor(element, texts, speed = 100) {
    this.element = element;
    this.texts = texts;
    this.speed = speed;
    this.textIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;
    this.start();
  }

  start() {
    this.type();
  }

  type() {
    const currentText = this.texts[this.textIndex];

    if (this.isDeleting) {
      this.element.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.element.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.speed;
    if (this.isDeleting) typeSpeed /= 2;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 1000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.texts.length;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Navbar functionality
class Navbar {
  constructor() {
    this.navbar = document.getElementById("navbar");
    this.mobileMenu = document.getElementById("mobileMenu");
    this.init();
  }

  init() {
    // Navbar initialization - no scroll effects needed since it's no longer fixed
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("open");
}

// Resume Button Handler
function handleResumeClick() {
  // Add visual feedback
  const resumeBtn = document.querySelector(".resume-btn");
  const resumeText = document.querySelector(".resume-btn-text");

  if (resumeBtn && resumeText) {
    // Change button text temporarily
    const originalText = resumeText.innerHTML;
    resumeText.innerHTML = `
      <span style="display: flex; align-items: center; gap: 0.5rem;">
        Downloading...
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
          <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"/>
        </svg>
      </span>
    `;

    // Trigger download
    setTimeout(() => {
      downloadResume();

      // Reset button text after download
      setTimeout(() => {
        resumeText.innerHTML = originalText;
      }, 1500);
    }, 300);
  } else {
    // Fallback if elements not found
    downloadResume();
  }
}

// Download Resume Function
function downloadResume() {
  try {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "assets/resume.pdf";
    link.download = "Sathish_Kumar_Resume.pdf";
    link.target = "_blank";

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    showNotification("Resume downloaded successfully! 📄", "success");
  } catch (error) {
    console.error("Error downloading resume:", error);
    showNotification("Unable to download resume. Please try again.", "error");
  }
}

// Simple notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".download-notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = "download-notification";
  notification.textContent = message;

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "12px 20px",
    borderRadius: "8px",
    color: "white",
    fontSize: "14px",
    fontWeight: "500",
    zIndex: "10000",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
    backgroundColor:
      type === "success" ? "#10B981" : type === "error" ? "#EF4444" : "#3B82F6",
  });

  // Add to page
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after delay
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Prevent multiple scroll animations
let isScrolling = false;

// Ultra smooth scroll - buttery smooth animations with accessibility support
function smoothScrollTo(targetPosition, duration = 1000) {
  // Prevent multiple scroll animations
  if (isScrolling) {
    return;
  }

  // Respect user's motion preferences for accessibility
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) {
    window.scrollTo(0, targetPosition);
    return;
  }

  isScrolling = true;

  // Temporarily disable CSS smooth scroll to avoid conflicts
  const html = document.documentElement;
  const originalScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  // If distance is very small, use a gentler animation
  if (Math.abs(distance) < 10) {
    window.scrollTo(0, targetPosition);
    html.style.scrollBehavior = originalScrollBehavior;
    isScrolling = false;
    return;
  }

  let startTime = null;

  // Ultra smooth easing function - combination of ease-in-out with custom curve
  function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2;
  }

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    const ease = easeInOutQuint(progress);
    const currentPosition = startPosition + distance * ease;

    // Use smoother scrollTo with rounding for pixel-perfect positioning
    window.scrollTo(0, Math.round(currentPosition));

    if (progress < 1) {
      requestAnimationFrame(animation);
    } else {
      // Gentle finish - ensure we end exactly at target position
      setTimeout(() => {
        window.scrollTo(0, targetPosition);
        // Re-enable CSS smooth scroll after animation completes
        html.style.scrollBehavior = originalScrollBehavior;
        isScrolling = false;
      }, 16); // One frame delay for smoothness
    }
  }

  requestAnimationFrame(animation);
}

// Debounce scroll calls to prevent rapid clicking issues
let scrollDebounceTimer = null;

// Ultra smooth scroll to sections with adaptive timing
function scrollToSection(sectionId) {
  // Clear any pending scroll calls
  if (scrollDebounceTimer) {
    clearTimeout(scrollDebounceTimer);
  }

  // Debounce rapid clicks for smoother experience
  scrollDebounceTimer = setTimeout(() => {
    executeScrollToSection(sectionId);
  }, 50);
}

function executeScrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  // Close mobile menu immediately if open
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }

  // Special case for 'home' - always scroll to top smoothly
  if (sectionId === "home") {
    smoothScrollTo(0, 800);
    return;
  }

  // Calculate target position
  const offset = 20;
  const elementPosition = section.offsetTop;
  const targetPosition = elementPosition - offset;
  const currentPosition = window.pageYOffset;
  const distance = Math.abs(currentPosition - targetPosition);

  // Adaptive duration based on distance for ultra smooth feel
  let duration = 1000;
  if (distance < 300) {
    duration = 600;
  } else if (distance < 800) {
    duration = 900;
  } else if (distance > 2000) {
    duration = 1200;
  }

  // If we're already very close, use gentle animation
  if (distance < 50) {
    smoothScrollTo(targetPosition, 400);
    return;
  }

  // Check if we're already in the target section (simplified)
  const currentSection = getCurrentActiveSection();

  if (currentSection === sectionId) {
    // If already in the section, scroll to top with smooth animation
    smoothScrollTo(0, 800);
  } else {
    // Scroll to the section with adaptive duration for smoothness
    smoothScrollTo(targetPosition, duration);
  }
}

// Optimized function to determine current active section
let cachedSectionPositions = null;

function getCurrentActiveSection() {
  const scrollPosition = window.scrollY + 100;

  // Cache section positions to avoid repeated DOM queries
  if (!cachedSectionPositions) {
    cachedSectionPositions = ["home", "about", "skills", "projects", "contact"]
      .map((id) => {
        const section = document.getElementById(id);
        return section ? { id, top: section.offsetTop } : null;
      })
      .filter(Boolean);
  }

  // Find the current section more efficiently
  for (let i = cachedSectionPositions.length - 1; i >= 0; i--) {
    if (scrollPosition >= cachedSectionPositions[i].top) {
      return cachedSectionPositions[i].id;
    }
  }

  return "home"; // Default to home if at the very top
}

// Clear cache when window resizes (sections might move)
window.addEventListener(
  "resize",
  debounce(() => {
    cachedSectionPositions = null;
  }, 250)
);

// Intersection Observer for scroll animations
class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, this.observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale"
    );
    animatedElements.forEach((el) => observer.observe(el));
  }
}

// Skills rendering
function renderSkills() {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skills
    .map(
      (skill, index) => `
        <div class="skill-card animate-on-scroll" style="animation-delay: ${
          (index + 1) * 0.1
        }s">
            <div class="skill-icon">${skill.icon}</div>
            <p>${skill.name}</p>
        </div>
    `
    )
    .join("");
}

// Experience rendering
function renderExperience() {
  const experienceGrid = document.getElementById("experienceGrid");
  if (!experienceGrid) return;

  experienceGrid.innerHTML = experiences
    .map(
      (exp, index) => `
        <div class="experience-card animate-on-scroll" style="animation-delay: ${
          (index + 1) * 0.2
        }s">
            <div class="experience-header">
                <div class="experience-title">
                    <img src="${exp.logo}" alt="${exp.company}">
                    <h3>${exp.role} at ${exp.company}</h3>
                </div>
                <span class="experience-period">${exp.period}</span>
            </div>
            <p class="experience-description">${exp.description}</p>
        </div>
    `
    )
    .join("");
}

// Projects rendering
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projects
    .map(
      (project, index) => `
        <div class="project-card ${
          index % 2 === 1 ? "reverse" : ""
        } animate-on-scroll" style="animation-delay: ${(index + 1) * 0.3}s">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            
            <div class="project-content">
                <h2 class="project-number">${String(project.id).padStart(
                  2,
                  "0"
                )}</h2>
                <p class="project-title">${project.title}</p>
                <p class="project-description">${project.description}</p>
                <a href="${
                  project.link
                }" class="project-link" target="_blank" rel="noopener noreferrer">
                    <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    `
    )
    .join("");
}

// Form handling
function handleContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Here you would typically send the form data to a server
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize components
  new Navbar();
  new ScrollAnimations();

  // Initialize typewriter effect
  const typewriterElement = document.getElementById("typewriter");
  if (typewriterElement) {
    new TypeWriter(typewriterElement, ["I am Sathish Kumar"], 50);
  }

  // Render dynamic content
  renderSkills();
  renderExperience();
  renderProjects();

  // Initialize form handling
  handleContactForm();

  // Expose functions globally for onclick handlers
  window.scrollToSection = scrollToSection;
  window.handleResumeClick = handleResumeClick;
  window.toggleMobileMenu = toggleMobileMenu;

  // Initialize ultra smooth scroll system
  console.log("🚀 Ultra smooth scroll system initialized!");
});

// Utility function to pad numbers
function padNumber(num) {
  return String(num).padStart(2, "0");
}

// Performance optimization - debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
