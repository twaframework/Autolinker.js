Ext.data.JsonP.Autolinker_Util({"tagname":"class","name":"Autolinker.Util","autodetected":{"members":true},"files":[{"filename":"Util.js","href":"Util.html#Autolinker-Util"}],"singleton":true,"members":[{"name":"abstractMethod","tagname":"property","owner":"Autolinker.Util","id":"property-abstractMethod","meta":{}},{"name":"assign","tagname":"method","owner":"Autolinker.Util","id":"method-assign","meta":{}},{"name":"ellipsis","tagname":"method","owner":"Autolinker.Util","id":"method-ellipsis","meta":{}},{"name":"extend","tagname":"method","owner":"Autolinker.Util","id":"method-extend","meta":{}},{"name":"indexOf","tagname":"method","owner":"Autolinker.Util","id":"method-indexOf","meta":{}},{"name":"splitAndCapture","tagname":"method","owner":"Autolinker.Util","id":"method-splitAndCapture","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.Util","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Util.html#Autolinker-Util' target='_blank'>Util.js</a></div></pre><div class='doc-contents'><p>A few utility methods for Autolinker.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-abstractMethod' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-property-abstractMethod' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-property-abstractMethod' class='name expandable'>abstractMethod</a> : Function<span class=\"signature\"></span></div><div class='description'><div class='short'><p>A function object which represents an abstract method.</p>\n</div><div class='long'><p>A function object which represents an abstract method.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-assign' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-method-assign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-method-assign' class='name expandable'>assign</a>( <span class='pre'>dest, src</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Assigns (shallow copies) the properties of src onto dest. ...</div><div class='long'><p>Assigns (shallow copies) the properties of <code>src</code> onto <code>dest</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dest</span> : Object<div class='sub-desc'><p>The destination object.</p>\n</div></li><li><span class='pre'>src</span> : Object<div class='sub-desc'><p>The source object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The destination object (<code>dest</code>)</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>str, truncateLen, [ellipsisChars]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Truncates the str at len - ellipsisChars.length, and adds the ellipsisChars to the\nend of the string (by default, two...</div><div class='long'><p>Truncates the <code>str</code> at <code>len - ellipsisChars.length</code>, and adds the <code>ellipsisChars</code> to the\nend of the string (by default, two periods: '..'). If the <code>str</code> length does not exceed\n<code>len</code>, the string will be returned unchanged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to truncate and add an ellipsis to.</p>\n</div></li><li><span class='pre'>truncateLen</span> : Number<div class='sub-desc'><p>The length to truncate the string at.</p>\n</div></li><li><span class='pre'>ellipsisChars</span> : String (optional)<div class='sub-desc'><p>The ellipsis character(s) to add to the end of <code>str</code>\n  when truncated. Defaults to '..'</p>\n<p>Defaults to: <code>..</code></p></div></li></ul></div></div></div><div id='method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-method-extend' class='name expandable'>extend</a>( <span class='pre'>superclass, protoProps</span> ) : Function<span class=\"signature\"></span></div><div class='description'><div class='short'>Extends superclass to create a new subclass, adding the protoProps to the new subclass's prototype. ...</div><div class='long'><p>Extends <code>superclass</code> to create a new subclass, adding the <code>protoProps</code> to the new subclass's prototype.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>superclass</span> : Function<div class='sub-desc'><p>The constructor function for the superclass.</p>\n</div></li><li><span class='pre'>protoProps</span> : Object<div class='sub-desc'><p>The methods/properties to add to the subclass's prototype. This may contain the\n  special property <code>constructor</code>, which will be used as the new subclass's constructor function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>The new subclass function.</p>\n</div></li></ul></div></div></div><div id='method-indexOf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-method-indexOf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-method-indexOf' class='name expandable'>indexOf</a>( <span class='pre'>arr, element</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Supports Array.prototype.indexOf() functionality for old IE (IE8 and below). ...</div><div class='long'><p>Supports <code>Array.prototype.indexOf()</code> functionality for old IE (IE8 and below).</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>arr</span> : Array<div class='sub-desc'><p>The array to find an element of.</p>\n</div></li><li><span class='pre'>element</span> : *<div class='sub-desc'><p>The element to find in the array, and return the index of.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The index of the <code>element</code>, or -1 if it was not found.</p>\n</div></li></ul></div></div></div><div id='method-splitAndCapture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.Util'>Autolinker.Util</span><br/><a href='source/Util.html#Autolinker-Util-method-splitAndCapture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.Util-method-splitAndCapture' class='name expandable'>splitAndCapture</a>( <span class='pre'>str, splitRegex</span> ) : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Performs the functionality of what modern browsers do when String.prototype.split() is called\nwith a regular expressi...</div><div class='long'><p>Performs the functionality of what modern browsers do when <code>String.prototype.split()</code> is called\nwith a regular expression that contains capturing parenthesis.</p>\n\n<p>For example:</p>\n\n<pre><code>// Modern browsers: \n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', ',', 'b', ',', 'c' ]\n\n// Old IE (including IE8):\n\"a,b,c\".split( /(,)/ );  // --&gt; [ 'a', 'b', 'c' ]\n</code></pre>\n\n<p>This method emulates the functionality of modern browsers for the old IE case.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>The string to split.</p>\n</div></li><li><span class='pre'>splitRegex</span> : RegExp<div class='sub-desc'><p>The regular expression to split the input <code>str</code> on. The splitting\n  character(s) will be spliced into the array, as in the \"modern browsers\" example in the\n  description of this method.\n  Note #1: the supplied regular expression <strong>must</strong> have the 'g' flag specified.\n  Note #2: for simplicity's sake, the regular expression does not need\n  to contain capturing parenthesis - it will be assumed that any match has them.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String[]</span><div class='sub-desc'><p>The split array of strings, with the splitting character(s) included.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});