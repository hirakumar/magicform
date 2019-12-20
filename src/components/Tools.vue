<template>
  <div class="toolsEle">
     
      <b-btn-group :vertical="true" >
        
                <template v-if="isContainer">
                    <b-button @click="addRow">Add Row</b-button>
                    <b-dropdown right text="Add Container">
                      <b-dropdown-item @click="addContainerBefore">   Before Container </b-dropdown-item>
                      <b-dropdown-item @click="addContainerAfter">   After Container </b-dropdown-item>
                    </b-dropdown>
                </template>

                <template v-if="isRow">
                 
                    <b-button @click="addCol">Add Col</b-button>
                    <b-dropdown right text="Add Row">
                      <b-dropdown-item @click="addRowBefore"> Before Row</b-dropdown-item>
                      <b-dropdown-item @click="addRowAfter"> After Row</b-dropdown-item>
                    </b-dropdown>

                
                </template>
                <template v-if="isForm">
                   <b-button @click="createFormGroup"><svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       y="287.32162"
       x="1.6084214"
       height="8.1526937"
       width="8.2411013"
       id="rect1366"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:1.4195888;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       y="285.66647"
       x="3.5577681"
       height="11.296831"
       width="1.760545"
       id="rect2300"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:8.55077744;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg></b-button>
                    <b-button @click="createFormSelectBox"><svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       y="286.53732"
       x="0.78743184"
       height="9.6479607"
       width="9.8097248"
       id="rect1366"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;stroke-linejoin:round" />
    <path
       id="path1414"
       d="m 7.839257,290.45116 -2.3344976,1.82913 -2.1222712,-2.04434"
       style="fill:none;stroke:#ffffff;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg></b-button>
                    <b-button @click="createCheckBoxGroup"><svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <g
       style="fill:#ffffff"
       transform="matrix(0.02505806,0,0,0.02505806,1.2524859,286.86397)"
       id="g2169">
      <g
         style="fill:#ffffff"
         id="g2112">
	<path
   style="fill:#ffffff"
   d="M 303.118,0 H 56.882 C 25.516,0 0,25.516 0,56.882 V 303.118 C 0,334.484 25.516,360 56.882,360 H 303.118 C 334.484,360 360,334.484 360,303.118 V 56.882 C 360,25.516 334.484,0 303.118,0 Z m 18.96,303.118 c 0,10.454 -8.506,18.96 -18.959,18.96 H 56.882 c -10.454,0 -18.959,-8.506 -18.959,-18.96 V 56.882 c 0,-10.454 8.506,-18.959 18.959,-18.959 h 246.236 c 10.454,0 18.959,8.506 18.959,18.959 v 246.236 z"
   id="path2108" />

	<path
   style="fill:#ffffff"
   d="m 249.844,106.585 c -6.116,0 -11.864,2.383 -16.19,6.71 l -84.719,84.857 -22.58,-22.578 c -4.323,-4.324 -10.071,-6.706 -16.185,-6.706 -6.115,0 -11.863,2.382 -16.187,6.705 -4.323,4.323 -6.703,10.071 -6.703,16.185 0,6.114 2.38,11.862 6.703,16.184 l 38.77,38.77 c 4.323,4.324 10.071,6.706 16.186,6.706 6.112,0 11.862,-2.383 16.19,-6.71 L 266.03,145.662 c 8.923,-8.926 8.922,-23.448 0,-32.374 -4.323,-4.322 -10.072,-6.703 -16.186,-6.703 z"
   id="path2110" />

</g>
      <g
         style="fill:#ffffff"
         id="g2114">
</g>
      <g
         style="fill:#ffffff"
         id="g2116">
</g>
      <g
         style="fill:#ffffff"
         id="g2118">
</g>
      <g
         style="fill:#ffffff"
         id="g2120">
</g>
      <g
         style="fill:#ffffff"
         id="g2122">
</g>
      <g
         style="fill:#ffffff"
         id="g2124">
</g>
      <g
         style="fill:#ffffff"
         id="g2126">
</g>
      <g
         style="fill:#ffffff"
         id="g2128">
</g>
      <g
         style="fill:#ffffff"
         id="g2130">
</g>
      <g
         style="fill:#ffffff"
         id="g2132">
</g>
      <g
         style="fill:#ffffff"
         id="g2134">
</g>
      <g
         style="fill:#ffffff"
         id="g2136">
</g>
      <g
         style="fill:#ffffff"
         id="g2138">
</g>
      <g
         style="fill:#ffffff"
         id="g2140">
</g>
      <g
         style="fill:#ffffff"
         id="g2142">
</g>
    </g>
  </g>
</svg></b-button>

 <b-button @click="createButtonGroup"> <svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       rx="2.1519444"
       y="288.52887"
       x="0.7702384"
       height="5.6102247"
       width="9.5362844"
       id="rect2332"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
 <!--
                     <b-dropdown right text="Buttons">
                       <b-dropdown-item @click="createButton">Button</b-dropdown-item>
                       <b-dropdown-item @click="createButtonGroup">Button Groups</b-dropdown-item>
                     </b-dropdown>-->
                    <b-button @click="createRadioGroup"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <circle
       r="3.8145139"
       cy="291.35159"
       cx="5.6117373"
       id="path3812"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <circle
       r="1.1736966"
       cy="291.31491"
       cx="5.6850929"
       id="path3814"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg></b-button>
                    
                    <b-button @click="createTextarea"><svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2" />
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       rx="0.53137976"
       y="287.12463"
       x="1.0094808"
       height="2.1506331"
       width="9.0853281"
       id="rect4028"
       style="fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       rx="0.53137976"
       y="290.50421"
       x="1.0094808"
       height="2.1506331"
       width="9.0853281"
       id="rect4028-0"
       style="fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       rx="0.33114973"
       y="293.79599"
       x="1.0094789"
       height="2.1506331"
       width="5.6618714"
       id="rect4028-0-8"
       style="fill:#f9f9f9;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
                    <b-button @click="createFile"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   width="32pt"
   height="32pt"
   viewBox="0 0 11.288889 11.288889"
   version="1.1"
   id="svg8"
   inkscape:version="0.92.3 (2405546, 2018-03-11)"
   sodipodi:docname="file-plain.svg">
  <defs
     id="defs2">
    <linearGradient
       id="linearGradient3770"
       osb:paint="solid">
      <stop
         style="stop-color:#000000;stop-opacity:1;"
         offset="0"
         id="stop3768" />
    </linearGradient>
  </defs>
  <sodipodi:namedview
     id="base"
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1.0"
     inkscape:pageopacity="0.0"
     inkscape:pageshadow="2"
     inkscape:zoom="6.028264"
     inkscape:cx="74.632299"
     inkscape:cy="19.4837"
     inkscape:document-units="pt"
     inkscape:current-layer="layer1"
     showgrid="false"
     units="pt"
     inkscape:window-width="1853"
     inkscape:window-height="1025"
     inkscape:window-x="67"
     inkscape:window-y="27"
     inkscape:window-maximized="1"
     showguides="true"
     inkscape:guide-bbox="true">
    <sodipodi:guide
       position="1.0094808,6.4957893"
       orientation="1,0"
       id="guide2100"
       inkscape:locked="false" />
    <sodipodi:guide
       position="10.094808,4.5646087"
       orientation="1,0"
       id="guide2102"
       inkscape:locked="false" />
  </sodipodi:namedview>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1"
     transform="translate(0,-285.71111)">
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 1.9311806,287.13008 h 4.871842 v 2.18909 h 2.413976 v 6.58357 h -7.329708 z"
       id="path4194"
       inkscape:connector-curvature="0" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1.05833331;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
       d="m 6.8030227,287.13008 2.413976,2.18909"
       id="path4198"
       inkscape:connector-curvature="0" />
  </g>
</svg>
</b-button>
<b-button @click="addColAfter">
  <svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       rx="0.38805553"
       y="287.06024"
       x="1.6138327"
       height="8.4726229"
       width="1.9072571"
       id="rect3835"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       id="rect3837"
       width="1.9072571"
       height="8.4726229"
       x="4.5480747"
       y="287.13361"
       rx="0.38805553" />
    <rect
       rx="0.38805553"
       y="287.13361"
       x="7.8124185"
       height="8.4726229"
       width="1.9072571"
       id="rect3839"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
<!--
                     <b-dropdown right text="Add Column">
                        <b-dropdown-item @click="addColBefore">Before Column</b-dropdown-item>
                        <b-dropdown-item  @click="addColAfter">After Column</b-dropdown-item>
                    </b-dropdown>
                    -->
                    <b-button @click="createHTML"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <path
       id="path3864"
       d="m 4.3114486,289.00812 -3.1863575,2.75717 3.0835718,3.10181"
       style="fill:none;stroke:#ffffff;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <path
       style="fill:none;stroke:#ffffff;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 7.1907577,289.10227 3.1941663,2.66821 -3.0911287,3.00173"
       id="path3866" />
    <path
       id="path3868"
       d="m 6.6020438,289.95782 -1.577155,3.70448"
       style="fill:none;stroke:#ffffff;stroke-width:1.05833328;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
                     <b-button @click="createContainer"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       rx="0.39687595"
       y="287.90387"
       x="2.1640031"
       height="6.7854338"
       width="1.6505109"
       id="rect3889"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       rx="0.42356247"
       y="286.51007"
       x="0.51349229"
       height="9.4262514"
       width="10.269845"
       id="rect3895"
       style="fill:none;fill-opacity:1;stroke:#ffffff;stroke-width:1.05833328;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       rx="0.39687595"
       y="287.92218"
       x="4.8231597"
       height="6.7854338"
       width="1.6505109"
       id="rect3889-9"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
    <rect
       rx="0.39687595"
       y="287.95886"
       x="7.4639773"
       height="6.7854338"
       width="1.6505109"
       id="rect3889-94"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.05833328;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
                </template>
                <template v-if="isCol">
                   
                     
                    <b-button @click="createFormGroup">Input</b-button>
                    <b-button @click="createFormSelectBox">Select Box</b-button>
                    <b-button @click="createCheckBoxGroup">Check Box</b-button>
                    <b-button @click="createButtonGroup"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <rect
       rx="2.1519444"
       y="288.52887"
       x="0.7702384"
       height="5.6102247"
       width="9.5362844"
       id="rect2332"
       style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:1.68486667;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" />
  </g>
</svg>
</b-button>
                    <!--
                     <b-dropdown right text="Buttons">
                       <b-dropdown-item @click="createButton">Button</b-dropdown-item>
                       <b-dropdown-item @click="createButtonGroup">Button Groups</b-dropdown-item>
                     </b-dropdown>
                     -->
                    <b-button @click="createRadioGroup">Radio Button Group</b-button>
                    
                    <b-button @click="createTextarea">Textarea</b-button>
                    <b-button @click="createFile"><svg
   xmlns:osb="http://www.openswatchbook.org/uri/2009/osb"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg8"
   version="1.1"
   viewBox="0 0 11.288889 11.288889"
   height="32pt"
   width="32pt">
  <defs
     id="defs2">
    <linearGradient
       osb:paint="solid"
       id="linearGradient3770">
      <stop
         id="stop3768"
         offset="0"
         style="stop-color:#ffffff;stop-opacity:1;" />
    </linearGradient>
  </defs>
  <metadata
     id="metadata5">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-285.71111)"
     id="layer1">
    <g
       transform="matrix(0.26458333,0,0,0.26458333,-15.323265,254.71846)"
       id="g4007">
      <g
         style="stroke-width:9.70978451"
         transform="matrix(0.1029889,0,0,0.1029889,61.549983,119.77251)"
         id="g3941">
	<g
   style="stroke-width:9.70978451"
   id="g3939">
		<path
   style="stroke-width:9.70978451"
   d="m 335.651,347.4 -0.1,-249.3 c 0.1,-8.3 -2.3,-12.6 -6.8,-17.1 l -77.2,-77.3 c -2.5,-2.5 -4.9,-3.7 -8.7,-3.7 h -184.2 c -12.4,0 -23.5,11.1 -23.5,23.5 v 323.9 c 0,12.4 11.1,23.5 23.5,23.5 h 254.7 c 13.6,0 23.5,-11.1 22.3,-23.5 z m -79.2,-305.4 38.3,38.3 h -32.1 c -3.7,0 -6.2,-2.5 -6.2,-6.2 z m 55.7,301.2 c 0,1.7 -1.4,3.1 -3.1,3.1 h -247.9 c -0.7,0 -1.2,-0.5 -1.2,-1.2 V 27.8 h -0.1 c 0,-1.7 1.4,-3.1 3.1,-3.1 h 165.7 c 1.7,0 3.1,1.4 3.1,3.1 v 46.4 c 0,17 13.9,30.9 30.9,30.9 h 46.4 c 1.7,0 3.1,1.4 3.1,3.1 z"
   id="path3937" />

	</g>

</g>
      <g
         id="g3949">
</g>
      <g
         id="g3951">
</g>
      <g
         id="g3953">
</g>
      <g
         id="g3955">
</g>
      <g
         id="g3957">
</g>
      <g
         id="g3959">
</g>
      <g
         id="g3961">
</g>
      <g
         id="g3963">
</g>
      <g
         id="g3965">
</g>
      <g
         id="g3967">
</g>
      <g
         id="g3969">
</g>
      <g
         id="g3971">
</g>
      <g
         id="g3973">
</g>
      <g
         id="g3975">
</g>
      <g
         id="g3977">
</g>
    </g>
  </g>
</svg>
</b-button>
                     <b-dropdown right text="Add Column">
                        <b-dropdown-item @click="addColBefore">Before Column</b-dropdown-item>
                        <b-dropdown-item  @click="addColAfter">After Column</b-dropdown-item>
                    </b-dropdown>
                    <b-button @click="createHTML">HTML</b-button>
                    
                     
                </template>
                </b-btn-group>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Tools',
  props:{
  	data:Number
  },
  data:function(){
      return {
          true : true
      }
  },
  methods:{
    createFormGroup(){
          this.$store.dispatch('createFormGroup',{formType : 'input'});
      },
      createFormSelectBox(){
        this.$store.dispatch('createFormGroup',{formType : 'form-select'});
      },
      createCheckBoxGroup(){
        this.$store.dispatch('createFormGroup',{formType : 'form-checkbox-group'});
      },
      createRadioGroup(){
        this.$store.dispatch('createFormGroup',{formType : 'form-radio-group'});
      },
      createTextarea(){
        this.$store.dispatch('createFormGroup',{formType : 'form-textarea'});
      },
      createFile(){
        this.$store.dispatch('createFormGroup',{formType : 'form-file'});
      },
      createButton(){
        this.$store.dispatch('createEle',{ele : 'button'});
      },
      createButtonGroup(){
        this.$store.dispatch('createButtonGroup',{ele : 'button-group'});
      },
      addCol(){
        this.$store.dispatch('createEle',{ele:'col'});
      },
      addRow(){
        this.$store.dispatch('createEle',{ele:'row'});
      },
      addColBefore: function() {
          this.$store.commit("addEle", {
              action: 'addBefore',
              eno: this.data
          });
      },
      addColAfter: function() {
          this.$store.commit("addEle", {
              action: 'addAfter',
              eno: this.data
          });
      },
      addRowBefore : function(){
        this.$store.commit("addEle",{action:'addBefore',eno:this.data});
      },
      addRowAfter: function(){
          this.$store.commit("addEle",{action:'addAfter',eno:this.data});
      },
      createHTML: function(){
        this.$store.dispatch('createEle',{ele:'div'});
      },
      createContainer:function(){
          this.$store.dispatch('createEle',{ele:'container'});
      },
       addContainerBefore() {
            this.$store.commit('addContainer', {
                action: 'addBefore'
            });
        },
        addContainerAfter() {
            this.$store.commit('addContainer', {
                action: 'addAfter'
            });
        }
  },
  computed: {
      showTrue:{
          get(){
              return true;
          }
      },
     eno:{
          get(){
             return this.data; 
          }
      },
     
      eleObj:{
        get(){
            
            if(this.data != undefined){
                return this.$store.getters.getObj(this.data);
            }
  		},
  		set(val){
  			return val;
  		}
      },
      
      isContainer:{
        get(){
            if(this.eleObj != undefined){

              return (this.eleObj.ele=="container" ? true : false);
            }
          }
      },
      isCol:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="col" ? true : false);
            }
          }
      },
       isFormGroup:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-group" ? true : false);
            }
          }
      },
       isFormSelect:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-select" ? true : false);
            }
          }
      },
      isForm:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="form" ? true : false);
            }
          }
      },
       isButton:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button" ? true : false);
            }
          }
      },
      isButtonGroup:{
        get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="button-group" ? true : false);
            }
          }
      },
      isInput:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-input" ? true : false);
            }
          }
      },
      isCheckBoxGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-checkbox-group" ? true : false);
          }
        }
      },
      
       isRadioGroup:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-radio-group" ? true : false);
          }
        }
      },
      isTextarea:{
        get(){
          if(this.eleObj != undefined){
             return (this.eleObj.ele=="form-textarea" ? true : false);
          }
        }
      },
      isFile:{
          get(){
              if(this.eleObj != undefined){
              return (this.eleObj.ele=="form-file" ? true : false);
            }
          }
      },
      isRow:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="row" ? true : false);
            }
          }
      },
       isDivEle:{
          get(){
            if(this.eleObj != undefined){
              return (this.eleObj.ele=="div" ? true : false);
            }
          }
      },
  }
}
</script>
