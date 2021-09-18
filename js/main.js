const version="0.9",author="@ovbml",lastEditDate=new Date(Date.UTC(2021,9,5,13,54)),galeryData={oneImgBlock:{self:document.querySelector(".one-image-galery"),title:document.querySelector(".one-image-galery__information-title"),img_container:document.querySelector(".one-image-galery__image"),img:document.querySelector(".one-image-galery__image img"),a:document.querySelector(".one-image-galery__image a"),photoCount:document.querySelector(".one-image-galery__photo-count"),photoNumber:document.querySelector(".one-image-galery__photo-number")},folderPath:"img/galery images/",loop:!0,currentImgIndex:1,imagesCount:53,initScale:1.5,scale:1.5,maxScale:2,minScale:.5,1:{title:"Закат в поле"},2:{title:"Закат над водой"},3:{title:"Вид из окна 9го этажа"},4:{title:"Горение свечи",oneItem:!0},5:{title:"Частный сектор из 4го этажа"},6:{title:"Река Днепр"},7:{title:"Закат возле Днепра"},8:{title:"Зима",oneItem:!0},9:{title:"Огни в ночи"},10:{title:"Ночной вид из окна дома"},11:{title:"Туман"},12:{title:"Ночь из окна 7го этажа"},13:{title:"Цветок на окне"},14:{title:"В траве у воды"},15:{title:"Ночь, луна и закат"},16:{title:"Закат в тумане"},17:{title:"Разделение неба"},18:{title:"Солнце из окна машины"},19:{title:"Дерево",oneItem:!0},20:{title:"Розовое небо"},21:{title:"Дерево с розовым небом",oneItem:!0},22:{title:"Дом  с розовым небом",oneItem:!0},23:{title:"Закат на Днепре"},24:{title:"Розовый Днепр"},25:{title:"На берегу Днепра"},26:{title:"Двойная радуга"},27:{title:"Красный асфальт",oneItem:!0},28:{title:"Оранжевый дом"},29:{title:"Розовая даль"},30:{title:"После дождя",oneItem:!0},31:{title:"Красивые тучи"},32:{title:"Радуга"},33:{title:"Фиолетовая вода и трава"},34:{title:"Красная вода"},35:{title:"Гриб и листья в траве"},36:{title:"Гриб крупным планом",oneItem:!0},37:{title:"Гриб общим планом",oneItem:!0},38:{title:"Гриб и трава общим планом"},39:{title:"Красивое небо"},40:{title:"Зимний вечер"},41:{title:"Отражение света на льду"},42:{title:"Новогодняя гирлянда"},43:{title:"Стеклопакет",oneItem:!0},44:{title:"Трава свысока",oneItem:!0},45:{title:"Желтые деревья"},46:{title:"Трава и желтые деревья"},47:{title:"В траве",oneItem:!0},48:{title:"Красивый закат из дома"},49:{title:"Красивый закат с другого ракурса"},50:{title:"Яркий красивый закат"},51:{title:"Закат в дали"},52:{title:"Закат на озере"},53:{title:"Поле"}};function getTopOffsetOf(e){const t=e.getBoundingClientRect(),a=window.pageYOffset||document.documentElement.scrollTop;return t.top+a}function itemOnScreen(e,t=4){const a=e.offsetHeight,l=getTopOffsetOf(e);let o=window.innerHeight-a/t;return a>window.innerHeight&&(o=window.innerHeight-window.innerHeight/t),(window.pageYOffset||document.documentElement.scrollTop)>l-o&&(window.pageYOffset||document.documentElement.scrollTop)<l+a}const animClass="_anim-item",noHideClass="_anim-no-hide",activeClass="_anim-active",animStartCoefficient=4,firstCheckDelay=300,enableAnim=!0,animItems=document.querySelectorAll("."+animClass);function checkAnim(){for(let e=0;e<animItems.length;e++){const t=animItems[e];itemOnScreen(t,animStartCoefficient)?t.classList.add(activeClass):t.classList.contains(noHideClass)||t.classList.remove(activeClass)}}function unactiveAllAnim(){const e=document.querySelectorAll("."+activeClass);for(index=0;index<e.length;index++){e[index].classList.remove(activeClass)}}function activeAllAnim(){for(let e=0;e<animItems.length;e++)animItems[e].classList.add(activeClass)}animItems.length>0&&enableAnim&&(window.addEventListener("scroll",checkAnim),setTimeout(checkAnim,firstCheckDelay));const spolerClasses={block:"spolers",spoler:"spolers__spoler",label:"spolers__label",items:"spolers__items",item:"spolers__item",active:"_active-spoler",shown:"_shown-spoler",oneSpoler:"_one-spoler"},spolerDatasetNames={animDuration:"animDuration",enableDelay:"enableDelay",startDelay:"startDelay",delayStep:"delayStep"},defaultSpolerDatesetValues={animDuration:300,enableDelay:!1,startDelay:0,delayStep:300},spolerBlocks=document.querySelectorAll("."+spolerClasses.block);for(let bi=0;bi<spolerBlocks.length;bi++){function getValue(propName){const value=block.dataset[spolerDatasetNames[propName]],defaultValue=defaultSpolerDatesetValues[propName];return eval(value||defaultValue)}const block=spolerBlocks[bi],spolers=block.querySelectorAll("."+spolerClasses.spoler),animDuration=getValue("animDuration"),enableDelay=getValue("enableDelay"),startDelay=getValue("startDelay"),delayStep=getValue("delayStep");for(let e=0;e<spolers.length;e++){function slideUp(e){const t=e.parentNode;e.style.height=e.scrollHeight-2+"px",setTimeout((function(){e.style.height="0px"}),0),t.classList.remove(spolerClasses.active),setTimeout((function(){t.classList.remove(spolerClasses.shown)}),animDuration)}function slideDown(e){const t=e.parentNode;e.style.height=e.scrollHeight-2+"px",t.classList.add(spolerClasses.active),setTimeout((function(){t.classList.add(spolerClasses.shown),e.style.height="auto"}),animDuration)}const t=spolers[e],a=t.querySelector("."+spolerClasses.label),l=t.querySelector("."+spolerClasses.items),o=l.querySelectorAll("."+spolerClasses.item);let n=startDelay;if(enableDelay)for(let e=0;e<o.length;e++){const t=o[e];t.style.transitionDelay=n+"ms",n+=delayStep}a.onclick=function(){if(block.classList.contains(spolerClasses.oneSpoler)){const e=block.querySelectorAll("."+spolerClasses.shown);for(let a=0;a<e.length;a++){const l=e[a],o=l.querySelector("."+spolerClasses.items);l!==t&&slideUp(o)}}t.classList.contains(spolerClasses.shown)?slideUp(l):slideDown(l)},t.classList.contains(spolerClasses.shown)||slideUp(l)}}const header=document.querySelector("header.header"),imagesCount=7,delay=10500;let imageIndex=1;function setHeaderImage(e){function t(e){document.querySelector(".header__image_"+imageIndex).style.opacity=""+e}t(0),imageIndex=e,imageIndex==imagesCount+1?imageIndex=1:imageIndex<1&&(imageIndex=imagesCount),t(1)}function prevHedaerImage(){setHeaderImage(imageIndex-1)}function nextHeaderImage(){setHeaderImage(imageIndex+1)}setTimeout((function e(){nextHeaderImage(),setTimeout(e,delay)}),delay),header.onclick=function(e){const t=e.screenX,a=header.scrollWidth,l=.2*a;t<=l?prevHedaerImage():t>=a-l&&nextHeaderImage()};let startMovePoint=null;header.addEventListener("touchmove",(function(e){null===startMovePoint&&(startMovePoint=e.changedTouches[0].clientX)})),header.addEventListener("touchend",(function(e){if(null===startMovePoint)return;const t=e.changedTouches[0].clientX;startMovePoint-t<-100?prevHedaerImage():startMovePoint-t>100&&nextHeaderImage(),startMovePoint=null}));const descriptionItems=document.querySelectorAll(".description__item");descriptionItems[0].childNodes[1].style.height="auto",descriptionItems[0].childNodes[1].classList.add("_active-spoler");for(let e=0;e<descriptionItems.length;e++){const t=descriptionItems[e],a=t.childNodes[0],l=t.childNodes[1]}let blockArrowAnim=!1;function rotateArrow(e,t){blockArrowAnim||(blockArrowAnim=!0,t.style.animationName=e,t.style.animationPlayState="running",setTimeout((function(e){e.style.animationName="",blockArrowAnim=!1}),1e3,t))}function setImage(e){const t=galeryData.oneImgBlock.title,a=galeryData.oneImgBlock.img_container,l=galeryData.oneImgBlock.img,o=galeryData.oneImgBlock.a,n=galeryData.imagesCount;if(galeryData.loop)e<1?e=n:e>n&&(e=1);else if(e<1||e>n)return;t.classList.add("_change"),a.classList.add("_change"),setTimeout((function(){a.style.height=l.scrollHeight+20+"px",galeryData.currentImgIndex=e,galeryData.oneImgBlock.photoNumber.value=galeryData.currentImgIndex,t.innerText=galeryData[e].title,l.src=galeryData.folderPath+e+".webp",o.href=galeryData.folderPath+e+".webp",a.style.height=l.scrollHeight+20+"px",setTimeout((function(){a.style.height="auto",t.classList.remove("_change"),a.classList.remove("_change")}),400)}),300)}function nextImg(){setImage(galeryData.currentImgIndex+1)}function prevImg(){setImage(galeryData.currentImgIndex-1)}function addOnWheel(e,t){e.addEventListener?"onwheel"in document?e.addEventListener("wheel",t):"onmousewheel"in document?e.addEventListener("mousewheel",t):e.addEventListener("MozMousePixelScroll",t):e.attachEvent("onmousewheel",t)}document.querySelector(".one-image-galery__arrow_prev").onclick=function(){rotateArrow("rotate-prev-arrow",this),prevImg()},document.querySelector(".one-image-galery__arrow_next").onclick=function(){rotateArrow("rotate-next-arrow",this),nextImg()},galeryData.oneImgBlock.img.alt="Фотография",galeryData.oneImgBlock.photoCount.innerText=galeryData.imagesCount,galeryData.oneImgBlock.title.innerText=galeryData[galeryData.currentImgIndex].title,galeryData.oneImgBlock.img.src=galeryData.folderPath+galeryData.currentImgIndex+".webp",galeryData.oneImgBlock.a.href=galeryData.folderPath+galeryData.currentImgIndex+".webp",galeryData.oneImgBlock.photoNumber.onchange=function(){let e=+this.value;if(isNaN(e)||e<1||e>galeryData.imagesCount)return this.value=galeryData.currentImgIndex;setImage(e)},addOnWheel(galeryData.oneImgBlock.img_container,(function(e){const t=(e.deltaY||e.detail||e.wheelDelta)/1e3,a=galeryData.maxScale,l=galeryData.minScale;let o=galeryData.scale;o-=t,o=t>0?Math.max(l,o):Math.min(a,o),e.altKey||(galeryData.scale=o,galeryData.oneImgBlock.img.style.transform=`scale(${o})`,e.preventDefault(),this.onmousemove(e))})),galeryData.oneImgBlock.img_container.onmousemove=function(e,t=1){const a=galeryData.oneImgBlock.img,l=galeryData.oneImgBlock.img_container;let o=5*(galeryData.maxScale-galeryData.scale);o=Math.max(o,.4);const n=l.getBoundingClientRect(),i=(e.clientX-n.x-l.clientWidth/2)/o,s=(e.clientY-n.y-l.clientHeight/2)/o;a.style.right=Math.min(Math.abs(i),l.clientWidth/2)*Math.sign(i)*t+"px",a.style.bottom=Math.min(Math.abs(s),l.clientHeight/2)*Math.sign(s)*t+"px"},galeryData.oneImgBlock.img_container.onmouseleave=function(){galeryData.oneImgBlock.img.style.transform="",galeryData.oneImgBlock.img.style.right="",galeryData.oneImgBlock.img.style.bottom="",galeryData.scale=galeryData.initScale},galeryData.oneImgBlock.img_container.addEventListener("touchstart",(function(e){e.preventDefault()})),galeryData.oneImgBlock.img_container.addEventListener("touchmove",(function(e){if(1==e.targetTouches.length){const t={clientX:e.targetTouches[0].clientX,clientY:e.targetTouches[0].clientY};this.onmousemove(t,-1)}else if(2==e.targetTouches.length){const t=galeryData.maxScale/300,a={x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY},l={x:e.targetTouches[1].clientX,y:e.targetTouches[1].clientY};let o=Math.sqrt((l.x-a.x)**2+(l.y-a.y)**2)*t;o<galeryData.minScale?o=galeryData.minScale:o>galeryData.maxScale&&(o=galeryData.maxScale),galeryData.scale=o,galeryData.oneImgBlock.img.style.transform=`scale(${o})`,this.onmousemove(event)}this.classList.add("_hover"),e.preventDefault()})),galeryData.oneImgBlock.img_container.addEventListener("touchend",(function(e){e.targetTouches.length>0||(this.classList.remove("_hover"),this.onmouseleave())}));const toup=document.querySelector(".footer__up"),todescription=document.querySelector(".footer__description"),description=document.querySelector(".description"),togalery=document.querySelector(".footer__galery"),galery=document.querySelector(".galery"),tocontacts=document.querySelectorAll(".description__link");function animScrollY(e,t=10,a=10){const l=window.pageYOffset||document.documentElement.scrollTop,o=e-l;if(Math.sign(t)!==Math.sign(o)&&(t*=-1),0!==t&&0!==o)if(Math.abs(o)>Math.abs(t)){window.scrollBy(0,t);if((window.pageYOffset||document.documentElement.scrollTop)===l)return;setTimeout(animScrollY,a,e,t,a)}else window.scrollBy(0,o)}function animScrollYTime(e,t=300,a=10){animScrollY(e,(e-(window.pageYOffset||document.documentElement.scrollTop))/(t/a),a)}toup.onclick=function(){animScrollYTime(0,150)},todescription.onclick=function(){animScrollYTime(getTopOffsetOf(description),150)},togalery.onclick=function(){animScrollYTime(getTopOffsetOf(galery),150)};
