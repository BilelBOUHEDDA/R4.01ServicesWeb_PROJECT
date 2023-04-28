
<template>

   <div class="map" id="map">
      <div class="boutonmap">
      <input type="checkbox" class="demo5 Activtoilettes" id="demo5" v-on:click="Icontoilettes">
      <label for="demo5"></label>
      <p class="textT" id="TT">Toilettes</p>
      <input type="checkbox" class="demo4 Activurgence" id="demo4" v-on:click="Iconurgence">
      <label for="demo4"></label>
      <p class="textU" id="TT">Urgences</p>
      <input type="checkbox" class="demo3 Activrestaurant" id="demo3" v-on:click="Iconrestaurant">
      <label for="demo3"></label>
      <p class="textR" id="TT">Restaurants</p>
      <div v-if="isPopupVisible">
  <p>Contenu de la pop-up</p>
  <button v-on:click="isPopupVisible = false">Fermer</button>
</div>

   </div>

    <img src="/assets/Images/Mapimages/toilettes.png" class="toilettes1 toilettes" v-bind:class="{ active: showToilettes }">
    <img src="/assets/Images/Mapimages/toilettes.png" class="toilettes2 toilettes" v-bind:class="{ active: showToilettes }">
    <img src="/assets/Images/Mapimages/toilettes.png" class="toilettes3 toilettes" v-bind:class="{ active: showToilettes }">
    <img src="/assets/Images/Mapimages/toilettes.png" class="toilettes4 toilettes" v-bind:class="{ active: showToilettes }"> 

 
    <img src="/assets/Images/Mapimages/restaurant.png" class="restaurant1 toilettes" v-bind:class="{ active: showRestaurant }">
    <img src="/assets/Images/Mapimages/restaurant.png" class="restaurant2 toilettes" v-bind:class="{ active: showRestaurant }">


   
    <img src="/assets/Images/Mapimages/urgence.png" class="urgence1 toilettes" v-bind:class="{ active: showUrgence }">
    <img src="/assets/Images/Mapimages/urgence.png" class="urgence2 toilettes" v-bind:class="{ active: showUrgence }">




      <div class="map__image">
         <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg138" width="1750"
            height="880" viewBox="0 0 1843.2 1264" sodipodi:docname="Carte_color_with_image.svg"
            inkscape:version="0.92.5 (2060ec1f9f, 2020-04-08)">
            <image class="test" width="1843.2" height="1264" preserveAspectRatio="none"
               xlink:href="/assets/Images/Mapimages/Carte3D.jpg" id="Carte" x="0" y="0" inkscape:label="#Carte"
               style="fill:#ff0000">
               <title id="title164">Carte</title>
            </image>
            

            
            
            <a id="r-Hall1" xlink:title="Hall1" v-bind:class="{ isActive: isActive1 }" v-on:mouseenter="isActive1 = true" 
               v-on:mouseleave="isActive1 = false">
               <path
                  d="m 720.42042,705.14114 94.29429,59.75976 67.26727,-56.75676 -3.9039,-24.32432 -21.62162,0.6006 -69.06907,-44.74474 z">
               </path>
               <path d="m 720.42042,705.14114 -4.24831,28.02313 93.74168,59.06849 4.80092,-27.33186 z"></path>
               <path d="m 809.91379,792.23276 68.21121,-57.43535 3.85698,-26.65327 -67.26727,56.75676 z"></path>
            </a>



            <a id="r-Hall2" xlink:title=" Hall2" xlink:href="http://google.com?q=Hall2"
               v-bind:class="{ isActive: isActive2 }" v-on:mouseenter="isActive2 = true"
               v-on:mouseleave="isActive2 = false">
               <path
                  d="m 794.89489,592.22823 -48.34834,-31.53153 4.5045,-3.60361 -45.04504,-28.52853 -41.44145,35.13514 -109.3093,-70.57057 -1.80181,1.8018 -12.61261,-6.60661 1.8018,-3.3033 -50.45045,-31.53153 -82.58258,69.66967 48.94895,30.93093 12.01201,-9.60961 13.81381,8.10811 -1.8018,2.4024 93.994,58.55856 -38.43844,32.73273 149.54955,94.5946 32.73273,-35.73574 66.96697,-65.46546 54.95495,-0.3003 -4.8048,-28.52853 -64.26427,0.6006 z"
                  inkscape:connector-curvature="0"></path>
               <path d="m 794.89489,592.22823 -21.62162,19.21922 19.11193,-0.45507 z"></path>
               <path d="m 787.38739,639.67568 42.75793,27.78367 h 7.85226 l 4.34476,-28.08397 z"></path>
               <path d="m 409.60961,523.15916 -5.087,27.67501 50.15076,31.55779 3.88519,-28.30187 z"></path>
               <path d="m 458.55856,554.09009 -3.88519,28.30187 12.1608,-10.35176 3.7364,-27.55972 z"></path>
               <path d="m 466.83417,572.0402 11.68977,7.98374 4.05864,-25.03295 1.8018,-2.4024 -13.81381,-8.10811 z">
               </path>
               <path d="m 482.58258,554.99099 -4.50771,27.72559 77.46371,48.6631 21.038,-17.83013 z"></path>
               <path d="m 538.13814,646.28228 -5.05945,27.95454 150.80214,94.88159 3.80686,-28.24153 z"></path>
               <path d="m 687.68769,740.87688 -3.80686,28.24153 32.29128,-35.95414 4.24831,-28.02313 z"></path>
            </a>


            <a id="r-Hall3" xlink:title=" Hall3" xlink:href="http://google.com?q=Hall3"
               v-bind:class="{ isActive: isActive3 }" v-on:mouseenter="isActive3 = true"
               v-on:mouseleave="isActive3 = false">
               <path
                  d="m 751.05105,557.09309 -93.39339,-59.15916 2.4024,-2.1021 -14.71471,-9.90991 -2.70271,3.003 -169.06907,-106.9069 72.07208,-60.66066 168.16816,106.3063 -0.9009,3.00301 13.21322,8.40841 3.6036,-1.50151 66.66667,42.04205 4.5045,35.43543 z"
                  inkscape:connector-curvature="0" inkscape:label="#Hall3"></path>
               <path d="m 473.57357,382.01802 -4.6813,27.78164 169.11223,106.47807 4.63814,-27.35281 z"></path>
               <path d="m 640.81224,514.33391 12.52683,8.09924 4.31859,-24.49922 2.4024,-2.1021 -14.71471,-9.90991 z">
               </path>
               <path d="m 638.0045,516.27773 2.80774,-1.94382 4.53311,-28.41199 -2.70271,3.003 z"></path>
               <path d="m 657.65766,497.93393 -4.76796,28.40797 32.29272,20.18295 20.82359,-17.96029 z"></path>
               <path d="m 746.54655,560.6967 16.59974,10.85501 34.25335,-28.60212 3.50126,-27.89854 z"></path>
            </a>

            <a id="r-Hall4" xlink:title="Hall4" xlink:href="http://google.com?q=Hall4"
               v-bind:class="{ isActive: isActive4 }" v-on:mouseenter="isActive4 = true"
               v-on:mouseleave="isActive4 = false">
               <path
                  d="m 668.76877,349.28529 81.08108,51.65165 67.26727,-0.6006 15.01501,78.97898 -35.73573,0.3003 4.5045,35.43543 37.23724,0.3003 5.7057,24.92493 39.63964,-0.3003 3.00301,14.71471 h 37.53753 l -3.3033,-15.61561 h 39.63964 l -4.8048,-25.22523 39.03903,-0.9009 -6.3063,-35.43544 -39.33934,0.3003 -14.11412,-78.97898 60.66067,0.30031 62.7628,-52.25226 h -72.07211 l -6.60661,-33.33333 -245.04505,2.1021 -4.8048,28.82883 1.2012,4.80481 z"
                  inkscape:connector-curvature="0"></path>
               <path d="m 668.76877,349.28529 -4.89657,29.05644 81.54446,51.01947 4.43319,-28.42426 z"></path>
               <path d="m 745.41666,429.3612 67.24167,-0.43342 4.45879,-28.59144 -67.26727,0.6006 z"></path>
               <path d="m 817.11712,400.33634 -4.45879,28.59144 9.34944,50.46221 10.12436,-0.0747 z"></path>
               <path d="m 797.39964,542.94959 36.37233,0.15281 4.36617,-27.75105 -37.23724,-0.3003 z"></path>
               <path d="m 833.77197,543.1024 4.82951,25.13823 5.24236,-27.96435 -5.7057,-24.92493 z"></path>
               <path d="m 843.84384,540.27628 -5.24236,27.96435 40.1221,-0.12383 4.7599,-28.14082 z"></path>
               <path d="m 878.72358,568.1168 2.97201,15.78879 4.7909,-29.2149 -3.00301,-14.71471 z"></path>
               <path d="m 881.69559,583.90559 37.08818,-0.24767 5.24025,-28.96723 h -37.53753 z"></path>
               <path d="m 920.72072,539.07508 3.3033,15.61561 -2.20633,12.93078 33.55892,-0.12384 4.98375,-28.42255 z">
               </path>
               <path d="m 955.55556,513.84985 4.8048,25.22523 -0.4019,2.66515 h 30.52499 l 4.11114,-28.79128 z"></path>
               <path d="m 934.83483,398.83483 5.12449,28.60694 51.82439,-0.3715 3.71179,-27.93513 z"></path>
               <path d="m 995.4955,399.13514 -3.71179,27.93513 61.64809,-52.48469 4.333,-27.38438 z"></path>
            </a>

            <a id="r-Hall5" xlink:title="Hall5" xlink:href="http://google.com?q=Hall5"
               v-bind:class="{ isActive: isActive5 }" v-on:mouseenter="isActive5 = true"
               v-on:mouseleave="isActive5 = false">
               <path
                  d="m 994.59459,512.94895 72.97301,46.54655 35.7357,-29.72973 -7.8078,-6.00601 37.8378,-30.33033 -3.3033,-2.7027 10.2102,-9.60961 3.9039,3.003 129.4295,-108.70871 -94.5946,-60.06006 -129.4295,108.70871 -0.3003,5.10511 -6.6066,6.9069 -3.6036,-2.1021 -50.75071,43.54354 z"
                  inkscape:connector-curvature="0"></path>
               <path d="m 994.59459,512.94895 -4.11114,28.79128 56.03145,34.84867 21.0527,-17.0934 z"></path>
               <path d="m 1095.4955,523.75976 7.8078,6.00601 8.1518,5.07014 16.3468,-13.18885 5.5314,-28.21763 z">
               </path>
               <path d="m 1130.03,490.72673 3.3033,2.7027 -4.4169,22.95447 6.9969,-6.37771 4.3269,-28.88907 z"></path>
               <path d="m 1135.9133,510.00619 3.096,2.10527 5.1348,-27.99134 -3.9039,-3.003 z"></path>
               <path d="m 1139.0093,512.11146 129.226,-109.10217 5.3383,-27.59788 -129.4295,108.70871 z"></path>
            </a>

            <a id="r-Hall6" xlink:title="Hall6" xlink:href="http://google.com?q=Hall6"
               v-bind:class="{ isActive: isActive6 }" v-on:mouseenter="isActive6 = true"
               v-on:mouseleave="isActive6 = false">
               <path
                  d="m 1148.9489,558.29429 132.4325,-111.11111 94.2943,59.45946 -42.3424,35.73574 v 3.9039 l 12.012,7.80781 -40.8408,32.73273 -13.5135,-9.60961 -218.6186,185.58559 -87.98802,-55.85586 -4.5045,-24.32432 20.42042,0.3003 55.2553,-45.64565 -56.4565,0.6006 -5.70571,-28.22822 66.36641,-0.90091 -29.7298,-18.61861 73.2733,-60.36036 z"
                  inkscape:connector-curvature="0"></path>
               <path d="m 1030.03,590.12613 -2.8888,19.0172 32.6186,-0.39859 z"></path>
               <path d="m 993.39339,609.64565 -4.70037,28.65883 4.70541,27.61332 5.70067,-28.04393 z"></path>
               <path d="m 993.39843,665.9178 h 27.67527 l 34.4819,-28.64453 -56.4565,0.6006 z"></path>
               <path d="m 979.87988,682.61862 -4.62204,28.99118 3.59097,22.53643 5.53557,-27.20329 z"></path>
               <path d="m 978.84881,734.14623 88.96939,56.27916 4.5542,-27.62659 -87.98802,-55.85586 z"></path>
               <path d="m 1072.3724,762.7988 -4.5542,27.62659 94.3558,-79.24899 2.3527,-26.56079 z"></path>
               <path d="m 1186.1862,666.1021 15.9838,10.5267 84.3878,-71.13835 4.4332,-28.27724 z"></path>
               <path d="m 1286.5578,605.49045 14.1781,9.47273 3.7686,-28.14036 -13.5135,-9.60961 z"></path>
               <path d="m 1300.7359,614.96318 39.4025,-31.96192 5.2069,-28.91117 -40.8408,32.73273 z"></path>
               <path
                  d="m 1333.3333,542.37838 v 3.9039 l 12.012,7.80781 -0.4331,2.98176 25.8289,-22.00984 4.9346,-28.41937 z">
               </path>
            </a>

            <a id="r-Hall7" xlink:title="Hall7" xlink:href="http://google.com?q=Hall7"
               v-bind:class="{ isActive: isActive7 }" v-on:mouseenter="isActive7 = true"
               v-on:mouseleave="isActive7 = false">
               <path
                  d="m 1186.1862,666.1021 -21.021,18.61862 98.4985,60.36036 106.9069,-89.18919 -69.0691,-39.33934 -83.7838,70.27027 z"
                  inkscape:connector-curvature="0"></path>
               <path d="m 1164.5267,684.61561 -2.3527,26.56079 97.7655,59.73859 3.7242,-25.83391 z"></path>
               <path d="m 1259.9395,770.91499 104.4085,-88.25691 6.2226,-26.76619 -106.9069,89.18919 z"></path>
            </a>

            <a id="r-P1" class="map__image" xlink:title="P1" xlink:href="http://google.com?q=P1"
               v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true"
               v-on:mouseleave="isActive8 = false">
               <path
                  d="m 291.44847,1061.2792 -23.67397,139.2586 107.82599,-12.1354 -26.85703,-12.5332 -1.39259,-0.9947 -0.39788,-1.1937 0.59683,-1.3926 1.98941,-0.9947 27.2549,-1.9894 2.78518,1.7905 6.56505,2.5862 6.16717,2.3873 8.55446,2.5862 9.7481,1.7905 8.55446,0.7958 13.1301,0.9947 9.94705,-0.5968 110.21328,-11.9365 3.77988,-2.7852 -0.19894,-2.9841 -3.382,-2.7852 -128.11796,-80.3721 -7.16188,-3.1831 -6.56505,-1.3925 -5.3714,4.3767 -6.76399,1.9894 -8.15658,2.5862 -5.76929,0.1989 -1.19364,6.5651 -1.39259,6.1672 -2.18835,4.5756 -19.29727,-2.5862 -1.98941,-1.9894 2.98411,-4.3767 0.99471,-3.1831 0.79576,-6.9629 -5.76929,-1.9894 -4.3767,-2.7852 -3.18305,-2.7852 -3.382,-2.7852 -11.33963,0.9947 -10.54387,-0.5968 -7.36082,-2.1883 -8.35551,-1.7905 -6.56506,-2.3873 -6.76399,-3.5809 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P2" xlink:title="P2" xlink:href="http://google.com?q=P2" v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true" v-on:mouseleave="isActive8 = false">
               <path
                  d="m 422.73839,1057.3985 59.9022,37.4083 15.40342,1.467 13.44743,2.934 7.57946,3.912 15.89243,8.313 48.16625,29.0953 11.00245,2.445 6.84597,-1.7115 5.86797,-4.89 10.75794,-13.2029 h 4.40098 l 3.42298,1.956 7.82396,3.423 84.35208,-124.9389 1.46699,-5.62347 -0.97799,-5.13447 -2.20049,-2.93399 -5.13447,-7.82396 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P3" xlink:title="P3" xlink:href="http://google.com?q=P3" v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true" v-on:mouseleave="isActive8 = false">
               <path
                  d="m 737.89731,1146.6406 115.15892,-12.4695 11.00245,-3.9119 14.66993,-5.6235 11.24694,-6.6015 8.06846,-9.7799 5.13447,-6.846 4.15648,-12.7139 1.95599,-1.467 18.09291,6.1125 0.7335,3.1784 -4.15648,11.4915 -2.68949,4.6455 -3.42298,4.8899 -8.31296,10.0245 83.61858,-9.291 -21.76039,-137.40828 -12.95843,0.48899 -2.68949,-1.46699 -1.22249,-2.20049 -1.2225,-6.60147 -1.22249,-7.33496 -3.91198,-6.84596 -5.37897,-6.60147 -7.57947,-6.60147 -7.57946,-3.17848 -7.33496,-1.95599 -7.09047,-1.467 -10.02445,-0.24449 -12.46943,0.97799 -12.71394,0.978 -12.95844,3.42298 -13.20293,3.91198 -6.60147,3.66748 -7.09046,4.88998 -2.44499,3.17848 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P4" xlink:title="P4" xlink:href="http://google.com?q=P4" v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true" v-on:mouseleave="isActive8 = false">
                              <path
                  d="m 985.57457,919.01222 35.94133,187.53058 1.956,3.6675 5.379,3.1785 4.4009,1.4669 9.78,-1.4669 257.4572,-27.3839 10.2689,-3.423 5.379,-5.6235 -1.2225,-5.6234 -8.8019,-12.4695 -11.736,-12.9584 0.978,-2.2005 17.1149,-7.824 2.934,1.467 13.203,12.9585 7.0904,8.8019 5.1345,9.291 1.7115,12.9584 53.0562,-6.1125 3.1785,-2.2004 -0.489,-2.934 -4.89,-3.912 -281.1736,-178.48412 -9.2909,-3.17848 -6.6015,-0.978 -8.8019,0.489 -39.6088,11.49144 9.0464,3.66748 11.736,5.13448 9.7799,5.86797 10.269,8.80195 3.6674,3.66749 v 2.44498 l -13.4474,6.60147 -2.2005,-0.73349 -7.5794,-7.57947 -9.78,-6.11247 -10.5134,-4.88997 -10.0245,-4.15648 -11.0024,-2.20049 h -13.203 l -7.3349,1.22249 -11.73598,2.44499 -6.35697,4.40098 -2.20049,2.20049 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P5" xlink:title="P5" xlink:href="http://google.com?q=P5" v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true" v-on:mouseleave="isActive8 = false">
               <path
                  d="m 1458.4352,1063.022 -301.7115,-193.88753 34.9633,-18.3374 31.0514,-16.38142 45.7213,-24.69438 20.7824,-11.24694 12.2249,-3.91198 12.4694,-3.66748 15.4035,-1.7115 2.6894,-0.24449 -40.3423,45.47677 12.714,10.51345 49.3887,-55.25673 14.4255,2.20049 11.7359,4.15648 10.0245,4.64548 11.4914,7.33496 8.313,7.09046 8.5574,8.06846 7.824,9.53546 6.6014,9.53545 5.379,10.75795 0.978,7.57946 10.269,53.05623 -12.9585,0.7335 -2.445,1.71149 5.1345,32.76284 2.2005,5.62347 3.423,5.62347 3.1785,3.42298 3.9119,2.68949 6.1125,5.62347 2.445,5.37897 1.467,6.84597 9.2909,50.3667 v 7.335 l -1.9559,7.335 -3.423,8.8019 -2.934,2.445 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-PH" xlink:title="PH" xlink:href="http://google.com?q=PH" v-bind:class="{ isActive: isActive8 }" v-on:mouseenter="isActive8 = true" v-on:mouseleave="isActive8 = false">
               <path
                  d="m 1083.1296,810.94377 76.5281,0.24449 50.3667,-11.73594 21.2714,-15.64792 0.2445,-2.93398 -4.6454,-4.64548 -3.1785,-2.68949 -0.2445,-0.73349 9.0464,-7.57947 -52.3227,-33.98533 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P6" xlink:title="P6" xlink:href="http://google.com?q=P6" v-bind:class="{ isActive: isActive14 }"
               v-on:mouseenter="isActive14 = true" v-on:mouseleave="isActive14 = false">
               <path
                  d="m 1507.0905,1038.3276 h 63.0806 l 4.401,-4.8899 7.335,-3.912 7.824,-2.934 0.2445,-8.313 12.4694,-0.978 0.2445,8.313 4.89,1.7115 5.6234,1.7115 6.846,4.401 2.934,4.1564 88.5085,-0.7335 -9.2909,-4.4009 4.89,-11.0025 7.8239,3.1785 9.291,2.445 9.0464,1.2225 -76.5281,-410.26897 -227.1393,2.20049 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P7" xlink:title="P7" xlink:href="http://google.com?q=P7" v-bind:class="{ isActive: isActive14 }" v-on:mouseenter="isActive14 = true" v-on:mouseleave="isActive14 = false">
               <path d="m 1427.3839,609.72127 227.3838,-1.95599 -67.9706,-363.32518 -226.8949,1.46699 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P8" xlink:title="P8" xlink:href="http://google.com?q=P8" v-bind:class="{ isActive: isActive16 }"
               v-on:mouseenter="isActive16 = true" v-on:mouseleave="isActive16 = false">
               <path
                  d="m 542.29829,272.06846 2.68949,3.66748 2.20048,1.2225 3.91198,1.46699 431.05135,-4.15648 3.17848,-0.978 v -2.44498 l -5.86797,-4.40098 -115.89242,-72.12714 -6.11247,-2.44499 -10.26895,-2.68949 -260.1467,1.95599 -5.62347,1.467 -4.15648,1.95599 -4.64547,2.93398 -2.93399,5.86797 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P9" xlink:title="P9" xlink:href="http://google.com?q=P9" v-bind:class="{ isActive: isActive16 }" v-on:mouseenter="isActive16 = true" v-on:mouseleave="isActive16 = false">
               <path
                  d="m 312.46944,230.99267 8.80195,2.93398 9.04646,1.71149 169.92665,36.67482 5.86797,0.2445 5.37897,-1.2225 3.42299,-1.71149 2.68948,-2.68948 25.42787,-63.81419 -0.24449,-2.44498 -2.93399,-3.17849 -4.15648,-1.46699 -217.35941,19.8044 -3.91198,1.71149 -2.20049,2.20049 -1.95599,2.93399 -0.978,3.17848 0.2445,2.20049 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P10" xlink:title="P10" xlink:href="http://google.com?q=P10" v-bind:class="{ isActive: isActive18 }"
               v-on:mouseenter="isActive18 = true" v-on:mouseleave="isActive18 = false">
               <path
                  d="m 296.33252,268.64548 1.95599,59.4132 1.22249,3.66748 3.17849,4.88998 2.68948,2.68948 3.17849,3.17849 3.42298,1.22249 85.81907,52.81174 3.66748,-11.98044 85.08558,-69.92665 -18.82641,-10.26895 -61.12469,-11.00245 -15.40343,-13.20293 -82.39608,-16.38142 -3.42299,1.46699 -2.44498,1.2225 -2.20049,0.97799 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P11" xlink:title="P11" xlink:href="http://google.com?q=P11" v-bind:class="{ isActive: isActive18 }" v-on:mouseenter="isActive18 = true" v-on:mouseleave="isActive18 = false">
               <path
                  d="m 260.1467,424.1467 -8.80196,108.80196 0.2445,3.42298 0.489,2.20049 1.46699,2.93398 33.74083,22.00489 108.06846,-83.61858 -87.04156,-54.27873 -39.3643,-5.62347 h -3.42299 l -2.44499,1.22249 -1.46699,1.2225 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-P0" xlink:title="P0" xlink:href="http://google.com?q=P0" v-bind:class="{ isActive: isActive18 }" v-on:mouseenter="isActive18 = true" v-on:mouseleave="isActive18= false">
               <path
                  d="m 260.1467,577.44743 -14.66993,175.06113 13.44744,3.17848 2.44498,1.46699 -0.73349,2.44499 -1.467,5.62347 0.2445,4.40098 2.68949,6.60147 2.20049,3.91198 3.66748,5.37897 5.37897,4.15648 10.75795,7.82396 9.77995,6.84597 7.09047,6.35697 6.84596,7.09046 3.91198,6.35697 2.93399,6.84597 0.48899,5.62347 -0.73349,5.86797 11.98044,7.57946 222.98288,-40.5868 9.53546,-3.42298 7.09046,-4.64548 43.03178,-35.94132 -314.66992,-194.86552 -12.71394,9.53545 -15.15892,-10.26895 -3.17849,1.95599 -1.95599,2.20049 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-PorteO" xlink:title="PorteO" xlink:href="http://google.com?q=PorteO"
               v-bind:class="{ isActive: isActive21 }" v-on:mouseenter="isActive21 = true"
               v-on:mouseleave="isActive21 = false">
               <path
                  d="m 206.42202,1058.8886 0.65531,3.4076 1.83486,3.1455 3.4076,3.1455 6.68414,2.7522 5.37353,1.1796 h 4.71821 l 4.58716,-0.5242 5.1114,-1.5728 3.93185,-1.9659 3.14548,-2.4902 2.35911,-2.6212 0.91743,-4.325 -0.91743,-4.194 -3.93185,-4.0629 -3.66972,-2.6213 -4.32504,-1.9659 -4.06291,-0.6553 -4.84928,-0.3932 -4.58715,0.3932 -3.14548,0.6553 -3.27654,1.1796 -2.75229,0.9174 -2.35911,1.9659 -1.57274,1.5728 -1.31062,1.8348 -1.04849,1.5728 -0.26212,1.8348 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-PorteS" xlink:title="PorteS" xlink:href="http://google.com?q=PorteS" v-bind:class="{ isActive: isActive21 }" v-on:mouseenter="isActive21 = true" v-on:mouseleave="isActive21 = false">
               <path
                  d="m 1573.0103,1051.4393 0.7245,4.2429 2.029,3.9163 3.768,3.9166 7.3911,3.4268 5.942,1.4686 h 5.2172 l 5.0725,-0.6527 5.652,-1.9583 4.3478,-2.4477 3.4782,-3.1004 2.6086,-3.2637 1.0143,-5.3851 -1.0143,-5.2219 -4.3478,-5.0585 -4.0579,-3.2639 -4.7825,-2.4476 -4.4927,-0.816 -5.3622,-0.4896 -5.0723,0.4896 -3.4782,0.816 -3.6232,1.4686 -3.0434,1.1423 -2.6086,2.4477 -1.7392,1.9582 -1.4492,2.2845 -1.1594,1.9584 -0.2898,2.2843 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-PorteE" xlink:title="PorteE" xlink:href="http://google.com?q=PorteE" v-bind:class="{ isActive: isActive21 }" v-on:mouseenter="isActive21 = true" v-on:mouseleave="isActive21 = false">
               <path
                  d="m 1201.8992,232.21864 3.0688,3.33565 3.3356,2.40166 4.4031,1.86796 3.8693,1.20083 3.8694,0.13343 4.1362,-0.13343 3.7359,-0.93398 4.6699,-2.13481 3.6025,-3.06879 2.0014,-4.26963 -0.6672,-5.2036 -2.8019,-4.53648 -3.2022,-3.20221 -3.7359,-2.00139 -3.8694,-1.06741 -3.8693,-0.80055 -4.2697,-0.5337 -4.2696,0.13342 -3.6025,1.20083 -3.6025,2.13482 -2.1348,1.73453 -2.0014,2.53509 -1.2008,3.20222 v 2.53509 l 0.5337,2.26824 z"
                  inkscape:connector-curvature="0"></path>
            </a>

            <a id="r-PorteN" xlink:title="PorteN" xlink:href="http://google.com?q=PorteN" v-bind:class="{ isActive: isActive21 }" v-on:mouseenter="isActive21 = true" v-on:mouseleave="isActive21 = false"> 
               <path
                  d="m 259.65827,245.72707 2.82046,3.70185 4.4951,3.17301 4.23069,2.11535 4.75952,1.05767 5.02394,0.70511 4.40696,-0.61697 5.20022,-1.23395 5.37649,-2.9086 2.4679,-3.43743 0.96953,-3.26115 -0.0881,-3.61371 -1.67464,-4.05441 -3.08488,-3.08487 -5.37649,-3.70185 -5.3765,-2.37976 -4.40696,-0.61698 h -4.58324 l -5.02394,0.52884 -3.52557,1.23395 -3.34929,2.55604 -2.64418,2.4679 -1.41023,2.29162 -0.44069,2.11534 -0.0881,2.4679 0.44069,1.58651 z"
                  inkscape:connector-curvature="0"></path>
            </a>

         </svg>
      </div>


   </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isActive1: false,
      isActive2: false, 
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
      isActive7: false,
      isActive8: false,
      isActive9: false,
      isActive10: false,
      isActive11: false,
      isActive12: false,
      isActive13: false,
      isActive14: false,
      isActive15: false,
      isActive16: false,
      isActive17: false,
      isActive18: false,
      isActive19: false,
      isActive20: false,
      isActive21: false,
      isActive22: false,   
      isActive23: false,
      isActive24: false,
      showToilettes: true,
      showRestaurant: true,
      showUrgence: true
    }
  },
  methods: {
   Icontoilettes() {
    this.showToilettes = !this.showToilettes
  },
  Iconrestaurant() {
   this.showRestaurant = !this.showRestaurant
  },
  Iconurgence() {
   this.showUrgence = !this.showUrgence
  },
},
}
</script>

<style scoped>
@import '../assets/CSS/map.css';
</style>