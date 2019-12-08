var oes = oes || {ui: {explanation:{}}};
/**
 * Insert a new node/element after another one
 */
dom = {
  insertAfter: function (newNode, referenceNode) {
    referenceNode.parentNode.insertBefore( newNode, referenceNode.nextSibling);
  }
};
/**
 * Convert HTML to Text
 * @param {string} htmlElemContent
 * @return {string}
 */
dom.convertHtml2Text = function (htmlElemContent) {
  var blockElem = document.createElement("div");
  blockElem.innerHTML = htmlElemContent;
  return blockElem.textContent;
};
oes.ui.translate = function (txt) {
  var trans = oes.ui.i18n && oes.ui.i18n.translations;
  if (typeof trans === "object" && txt in trans) return trans[txt];
  else return txt;
}

oes.ui.explanation["expl-CM"] = "The <dfn>conceptual model</dfn>, also called <i>domain model</i>, " +
    "describes the real-world <i>system under investigation</i> by identifying the relevant " +
    "types of objects and events, and describing their dynamics, allowing to understand " +
    "what's going on in the system.";
oes.ui.explanation["expl-CIM"] = "<p>A <dfn>conceptual information model</dfn> describes the subject matter " +
    "vocabulary used, e.g., in the system narrative, in a semi-formal way. Such a vocabulary " +
    "essentially consists of names for</p> " +
    "<ul><li><strong>types</strong>, corresponding to <i>classes</i> in OO modeling, or <i>unary " +
    "predicates</i> in formal logic,</li> " +
    "<li><strong>properties</strong> corresponding to <i>binary predicates</i> in formal logic,</li>" +
    "<li><strong>associations</strong> corresponding to <i>n-ary predicates</i> (with <i>n</i> > 1) in formal logic.</li></ul> " +
    "<p>The main categories of types are <i>object types</i> and <i>event types</i>. A simple form of " +
    "conceptual information model is obtained by providing a list of each of them, while a more elaborated " +
    "model, preferably in the form of a UML class diagram, also defines properties and associations, " +
    "including the <strong>participation</strong> of objects (of certain types) in events (of certain types).</p>";
oes.ui.explanation["expl-CPM"] = "<p>A <dfn>conceptual process model</dfn> should include the event types "+
    "identified in the conceptual information model, and describe in which temporal sequences events may occur, "+
	  "based on conditional and parallel branching. We can do this by describing, for each of these event types, "+
	  "the <b><i>causal regularity</i></b> associated with it " +
    "in the form of an <b><i>event rule</i></b> that defines the <b><i>state changes</i></b> and " +
    "<b><i>follow-up events</i></b> caused by events of that type.</li></ol>" +
    "For simplicity, we may merge those types of events, which can be considered to temporally " +
    "coincide. This is the case whenever an event unconditionally causes an immediately succeeding follow-up " +
    "event.</p><p>A conceptual process model can be defined in the form of an <b><i>event rule table</i></b> " +
    "or in the form of BPMN process diagrams that visualize the event rules.</p>";
oes.ui.explanation["expl-DM"] = "The simulation <dfn>design model</dfn> defines a computational design for a simulation " +
    "based on a conceptual model. Unlike the conceptual model, the design is tailored towards the purpose " +
    "of the simulation project (e.g., for answering certain research questions in a social system analysis " +
    "project or in a technical system engineering project, or for teaching certain facts about a system " +
    "in an educational simulation project). Although the design model is independent of a specific technology " +
    "platform, it is typically based on object-oriented modeling (e.g., with UML diagrams). It can be " +
    "implemented in different ways with any specific technology choice, typically using an object-oriented " +
    "programming approach.";
oes.ui.explanation["expl-IDM"] = "<p>An <dfn>information design model</dfn> is normally derived from a conceptual " +
    "information model by <b><i>choosing the design-relevant types</i></b> of objects and events and enrich " +
    "them with design details, while dropping other object types and event types not deemed relevant for " +
    "the simulation design. Adding design details includes specifying <b><i>property ranges</i></b> as well " +
    "as adding multiplicity and other types of <b><i>constraints</i></b>.</p>" +
    "<p>In addition to these general information modeling issues, there are also a few issues, which " +
    "are specific for simulation modeling:</p>" +
    "<ol><li>If the simulation is to deal with <b><i>objects in space</i></b>, the design model must be " +
    "based on a choice of <b><i>space model</i></b>: one-dimensional (1D) discrete space, two-dimensional " +
    "(2D) discrete space (also called <i>grid space</i>), three-dimensional (3D) discrete space, " +
    "and 1D/2D/3D continuous space. The chosen space model implies a corresponding form of spatial " +
    "<i>positions</i> (or <i>locations</i>): a 1-, 2- or 3-tuple of integers or decimal numbers.</li>" +
    "<li>The information design model must distinguish between <b><i>exogenous</i></b> and " +
    "<b><i>caused</i></b> (or <i>endogenous</i>) event types. For any exogenous event type, the " +
    "<b><i>recurrence</i></b> of events of that type must be specified, typically in the form of a " +
    "random variable, but in some cases it may be a constant (like 'on each Monday'). The recurrence " +
    "defines the elapsed time between two consecutive events of the given type (their inter-occurrence " +
    "time). It can be specified within the event class concerned in the form of a special method " +
    "with the predefined name 'recurrence'.</li>" +
    "<li>Certain simulation variables may be subject to random variation, so they can " +
    "be considered to be <b><i>random variables</i></b> with an underlying probability distribution that " +
    "is sampled by a corresponding method stereotyped «rv» for categorizing it as a <i>random variate</i> " +
    "sampling method. The underlying probability distribution can be indicated in the model diagram by " +
    "appending a symbolic expression, denoting a distribution (with parameter values), to the method " +
    "definition clause. For instance, <i>U(1,6)</i> may denote the uniform distribution with lower bound 1 " +
    "and upper bound 6, while <i>Exp(1.5)</i> may denote the exponential distribution with event rate 1.5.</li> " +
    "</ol>";
oes.ui.explanation["expl-PDM"] = "In the <dfn>process design model</dfn>, we refine the conceptual process model. " +
    "We can do this by identifying those types of events that account for the causation of relevant state " +
    "changes and follow-up events by triggering a causal regularity. Any event type modeled in the " +
    "information model could potentially trigger a causal regularity. For simplicity, however, we may " +
    "omit those types of events, which can be considered to temporally coincide with events of another type.";

/* No longer used - can be DROPPED */
oes.ui.createBackToSimulationLinks = function () {
  var backLinkEl = document.createElement("a"),
      divEl = document.createElement("div"),
      pEl = document.createElement("p");
  backLinkEl.href = "index.html";
  backLinkEl.textContent = oes.ui.translate("Back to simulation");
  divEl.className = "backLink";
  divEl.appendChild( backLinkEl);
  document.getElementById("title").appendChild( divEl);
  pEl.appendChild( backLinkEl.cloneNode(true));
  // add the "Back to simulation" links to beginning and end of page
  //document.body.insertBefore(pEl, document.body.firstChild);
  document.body.appendChild( pEl);
};

oes.ui.setupDescription = function () {
  var el=null, refEl=null, pageTitleEl=null, mainSectElems=null, mainSectEl=null,
      trans = oes.ui.translate, txt="",
      explReqElems=null, explReqEl=null, explEl=null, i=0,
      frontMatterEl = document.querySelector("body > div#frontMatter"),
      sysNarr = document.getElementById("systemNarrative"),  // optional
      shortDescrEl = document.getElementById("shortDescription");  // mandatory
  var docLocale = document.documentElement.lang,
      simName = String( sim.scenario.name || sim.model.name),
      simTitle = String( sim.scenario.title || sim.model.title),
      created = new Date( sim.model.created),
      modified = new Date( sim.model.modified),
      license = sim.model.license, licenseLinks=[],
      contributions = sim.model.contributors ?
          ", "+ trans("with contributions by") +" "+ sim.model.contributors : "",
      artworkCredits = !sim.config.artworkCredits ? "" :
          " | <a href='#' title='"+ sim.config.artworkCredits + "'>"+ trans("Artwork Credits") +"</a>";
  var dateTimeFmt = new Intl.DateTimeFormat( docLocale);
  licenseLinks["CC BY"] = "https://creativecommons.org/licenses/by/4.0/";
  licenseLinks["CC BY-SA"] = "https://creativecommons.org/licenses/by-sa/4.0/";
  licenseLinks["CC BY-NC"] = "https://creativecommons.org/licenses/by-nc/4.0/";
  if (licenseLinks[license]) {
    license = "<a href='"+ licenseLinks[license] +"'>"+ license +"</a>";
  }
  // Set HTML title
  if (!document.title){
    document.title = String(sim.scenario.name || sim.model.name) + "Object Event Simulation";
  }
  // create page heading
  pageTitleEl = document.querySelector("#frontMatter h1");
  if (!pageTitleEl) {
    pageTitleEl = document.createElement("h1");
    frontMatterEl.insertBefore( pageTitleEl, frontMatterEl.firstElementChild);
    pageTitleEl.innerHTML = "<span>"+ simTitle +"</span>";
  }
  if (simTitle.length > 38) pageTitleEl.style.fontSize = "140%";
  el = document.createElement("div");
  el.innerHTML = trans("Model name") +": " + simName + ", " +
      trans("available on") +" <a href='https://sim4edu.com'>Simulation-for-Education</a>.";
  dom.insertAfter( el, pageTitleEl);
  refEl = el;
  if (sim.model.source) {
    el = document.createElement("p");
    el.innerHTML = trans("Based on") +" "+ sim.model.source;
    dom.insertAfter( el, refEl);
    refEl = el;
  }
  el = document.createElement("p");
  el.id = "metaData";
  el.innerHTML = trans("Copyright") +" "+ sim.model.creator + " ("+ license + "), " +
      trans("created on") +" "+ dateTimeFmt.format( created) +" "+ trans("with the") + " " +
      trans("<i>Object Event Simulation (OES)</i> framework") +" <a href='https://www.sim4edu.com/downloads'>OESjs</a>, "+
      trans("last modified on") +" "+ dateTimeFmt.format( modified) + contributions +
      artworkCredits + " | <a href='https://sim4edu.com/credits.html'>" + trans("OESjs Credits") +"</a>";
  dom.insertAfter( el, refEl);
  // create Model Description
  el = document.createElement("h1");
  el.textContent = trans("Model Description");
  shortDescrEl.appendChild(el);
  if (sim.model.shortDescription.includes("<p>")) el = document.createElement("div");
  else el = document.createElement("p");
  el.innerHTML = sim.model.shortDescription;
  shortDescrEl.appendChild(el);
  // create System Narrative
  if (sim.model.systemNarrative) {
    if (sysNarr) sysNarr.innerHTML = sim.model.systemNarrative;
    else {
      sysNarr = document.createElement("section");
      el = document.createElement("h1");
      el.textContent = trans("System Narrative");
      sysNarr.appendChild(el);
      if (sim.model.systemNarrative.includes("<p>")) el = document.createElement("div");
      else el = document.createElement("p");
      el.innerHTML = sim.model.systemNarrative;
      sysNarr.appendChild(el);
      // body.firstElementChild = header
      document.body.firstElementChild.insertBefore( sysNarr, shortDescrEl);
    }
  }
  mainSectElems = document.querySelectorAll(".collapsed");
  for (i=0; i < mainSectElems.length; i++) {
    mainSectEl = mainSectElems[i];
    explReqEl = mainSectEl.querySelector("sup.expl-req");  // explanation request "?"
    if (explReqEl) {
      explEl = mainSectEl.querySelector("div.expl");
      txt = (oes.ui.i18n && oes.ui.i18n.translations && oes.ui.i18n.translations[explEl.id]) ||
	      oes.ui.explanation[explEl.id];
      explReqEl.title = dom.convertHtml2Text( txt);
    }
    mainSectEl.firstElementChild.addEventListener("click", function (e) {
      var sectionEl = e.target.tagName==="SPAN"||e.target.tagName==="SUP" ?
              e.target.parentNode.parentNode : e.target.parentNode;
      var explReqEl = sectionEl.querySelector("sup.expl-req"),
          explEl = sectionEl.querySelector("div.expl");
      var transl = oes.ui.i18n && oes.ui.i18n.translations;
      // toggle display of content by switching class
      if (sectionEl.classList.contains("collapsed")) {
        sectionEl.classList.remove("collapsed");
        sectionEl.firstElementChild.firstElementChild.textContent = "▼";
        if (explReqEl) explReqEl.title = "";
      } else {
        sectionEl.classList.add("collapsed");
        sectionEl.firstElementChild.firstElementChild.textContent = "►";
        if (explReqEl) {
          explReqEl.title = dom.convertHtml2Text((transl && transl[explEl.id]) ||
              oes.ui.explanation[explEl.id]);
        }
      }
      //e.preventDefault();
    });
  }
  // define event handlers for explanation requests
  explReqElems = document.querySelectorAll("sup.expl-req");
  for (i=0; i < explReqElems.length; i++) {
    explReqElems[i].addEventListener("mouseover", function (e) {
      var sectEl = e.target.parentNode.parentNode,
          explEl = sectEl.querySelector("div.expl");
      var transl = oes.ui.i18n && oes.ui.i18n.translations,
          explTxt = (transl && transl[explEl.id]) || oes.ui.explanation[explEl.id];
      if (!sectEl.classList.contains("collapsed")) {
        if (!explEl.innerHTML) explEl.innerHTML = explTxt;
        explEl.style.display = "block";
      }
    });
    explReqElems[i].addEventListener("mouseout", function (e) {
      var explEl = e.target.parentNode.parentNode.querySelector("div.expl");
      explEl.style.display = "none";
    });
    /*
    explReqElems[i].addEventListener("click", function (e) {
      var sectionEl = e.target.tagName === "SPAN" ?
          e.target.parentNode.parentNode : e.target.parentNode;
      // toggle display of content by switching class
      if (sectionEl.classList.contains("collapsed")) {
        sectionEl.classList.remove("collapsed");
        sectionEl.firstElementChild.firstElementChild.textContent = "−";
      }
      else {
        sectionEl.classList.add("collapsed");
        sectionEl.firstElementChild.firstElementChild.textContent = "+";
      }
      //e.preventDefault();
    });
    */
  }
};
