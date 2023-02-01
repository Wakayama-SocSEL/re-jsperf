const data = [
  {
    id: 9748,
    title: 'Benchmark: For Loop vs While Loop vs indexOf',
    description:
      'For Loop vs While Loop vs indexOf (version: 0). Comparing performance of: For Loop for item towards beginning vs While Loop for item towards beginning vs ...'
  },
  {
    id: 7075,
    title: 'Benchmark: Array slice vs for loop',
    description:
      'Array slice vs for loop (version: 0). Comparing performance of: slice vs push. Created: 2 years ago by: Guest. Jump to the latest result'
  }
]

const Benchmark = () => {
  const htmlelm =
    '<div class="panel panel-default">         <div class="panel-heading"><b>Script Preparation code: </b> </div>         <div class="panel-body">             <textarea class="form-control auto-height" readonly="" data-code="javascript" style="display: none;">var arr = ["apple", "banana", "cherry", "donuts", "eggplant", "french fries", "goulash", "hamburger", "ice cream", "juice", "kebab", "lemonade", "mango", "nuts", "octopus", "parsley", "quail egg", "risotto", "stew", "tapas", "udon", "vanilla", "wheat", "xylotil", "yogurt", "zucchinni"];  function forLoop(array, item) { 	for (var i = 0; i &lt; array.length; i++) {     	if (array[i] === item) {           return i;         }     }     return -1; }  function whileLoop(array, item) {   	var i = 0; 	while (i &lt; array.length) {     	if (array[i] === item) {         	return i;         }       	i += 1;     }     return -1; }  function indexOfNative(array, item) { 	return array.indexOf(item); }</textarea><div class="CodeMirror cm-s-default"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 71px; left: 171.688px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0" data-dl-input-translation="true"></textarea><deepl-inline-translate style="z-index: 1999999999;"></deepl-inline-translate></div><div class="CodeMirror-vscrollbar" cm-not-content="true" style="width: 18px; pointer-events: none;"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="display: block; right: 0px; left: 0px; height: 18px; pointer-events: none;"><div style="height: 100%; min-height: 1px; width: 1781px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 30px; min-height: 508px; min-width: 1757.36px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors" style=""><div class="CodeMirror-cursor" style="left: 158.688px; top: 60px; height: 20px;">&nbsp;</div></div><div class="CodeMirror-code" style=""><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">arr</span> <span class="cm-operator">=</span> [<span class="cm-string">"apple"</span>, <span class="cm-string">"banana"</span>, <span class="cm-string">"cherry"</span>, <span class="cm-string">"donuts"</span>, <span class="cm-string">"eggplant"</span>, <span class="cm-string">"french fries"</span>, <span class="cm-string">"goulash"</span>, <span class="cm-string">"hamburger"</span>, <span class="cm-string">"ice cream"</span>, <span class="cm-string">"juice"</span>, <span class="cm-string">"kebab"</span>, <span class="cm-string">"lemonade"</span>, <span class="cm-string">"mango"</span>, <span class="cm-string">"nuts"</span>, <span class="cm-string">"octopus"</span>, <span class="cm-string">"parsley"</span>, <span class="cm-string">"quail egg"</span>, <span class="cm-string">"risotto"</span>, <span class="cm-string">"stew"</span>, <span class="cm-string">"tapas"</span>, <span class="cm-string">"udon"</span>, <span class="cm-string">"vanilla"</span>, <span class="cm-string">"wheat"</span>, <span class="cm-string">"xylotil"</span>, <span class="cm-string">"yogurt"</span>, <span class="cm-string">"zucchinni"</span>];</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">forLoop</span>(<span class="cm-def">array</span>, <span class="cm-def">item</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">for</span> (<span class="cm-keyword">var</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>; <span class="cm-variable-2">i</span> <span class="cm-operator">&lt;</span> <span class="cm-variable-2">array</span>.<span class="cm-property">length</span>; <span class="cm-variable-2">i</span><span class="cm-operator">++</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    <span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">array</span>[<span class="cm-variable-2">i</span>] <span class="cm-operator">===</span> <span class="cm-variable-2">item</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">          <span class="cm-keyword">return</span> <span class="cm-variable-2">i</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">        }</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    }</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    <span class="cm-keyword">return</span> <span class="cm-operator">-</span><span class="cm-number">1</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">}</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">whileLoop</span>(<span class="cm-def">array</span>, <span class="cm-def">item</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">  <span class="cm-tab" role="presentation" cm-text="	">  </span><span class="cm-keyword">var</span> <span class="cm-def">i</span> <span class="cm-operator">=</span> <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">while</span> (<span class="cm-variable-2">i</span> <span class="cm-operator">&lt;</span> <span class="cm-variable-2">array</span>.<span class="cm-property">length</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    <span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">if</span> (<span class="cm-variable-2">array</span>[<span class="cm-variable-2">i</span>] <span class="cm-operator">===</span> <span class="cm-variable-2">item</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">        <span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">return</span> <span class="cm-variable-2">i</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">        }</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">      <span class="cm-tab" role="presentation" cm-text="	">  </span><span class="cm-variable-2">i</span> <span class="cm-operator">+=</span> <span class="cm-number">1</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    }</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">    <span class="cm-keyword">return</span> <span class="cm-operator">-</span><span class="cm-number">1</span>;</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">}</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">function</span> <span class="cm-def">indexOfNative</span>(<span class="cm-def">array</span>, <span class="cm-def">item</span>) {</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-tab" role="presentation" cm-text="	">    </span><span class="cm-keyword">return</span> <span class="cm-variable-2">array</span>.<span class="cm-property">indexOf</span>(<span class="cm-variable-2">item</span>);</span></pre><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">}</span></pre></div></div></div></div></div><div style="position: absolute; height: 30px; width: 1px; border-bottom: 0px solid transparent; top: 508px;"></div><div class="CodeMirror-gutters" style="display: none; height: 538px;"></div></div></div>         </div>     </div>'
  return (
    <div style={{ width: '100%', fontSize: '16px' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlelm }}></div>
    </div>
  )
}

export default Benchmark

// SG
export const getStaticPaths = async () => {
  const paths = data.map((item) => ({
    params: {
      id: item.id.toString()
    }
  }))

  return { paths, fallback: false }
}

type ParamType = {
  params: {
    id: string
  }
}

export const getStaticProps = async ({ params }: ParamType) => {
  const item = data.find((item) => item.id.toString() === params.id)

  return {
    props: {
      item
    }
  }
}
