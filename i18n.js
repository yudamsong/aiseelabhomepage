(function () {
  if (window.AISEE_I18N) return;
  // [English, 한국어]
  var P = [
    // header / nav
    ['Home', '홈'], ['Member', '구성원'], ['Professor', '교수'], ['Members', '연구원'],
    ['Undergraduates', '학부연구생'], ['Alumni', '졸업생'], ['Research', '연구'],
    ['Publications', '논문'], ['Broad', '소식'], ['Contact', '연락처'], ['More', '더보기'],
    ['Jeonbuk National University', '전북대학교'],
    // home
    ['JEONBUK NATIONAL UNIVERSITY', '전북대학교'],
    ['Jeonbuk National University AI Satellite Remote Sensing Lab', '전북대학교 인공지능 위성원격탐사 연구실'],
    ['AI SEE Lab specializes in satellite image analysis, environmental monitoring, and climate change research, developing advanced remote sensing technologies with deep learning and machine learning.',
     'AI SEE Lab은 딥러닝과 머신러닝 기반의 첨단 원격탐사 기술을 개발하며, 위성영상 분석, 환경 모니터링, 기후변화 연구를 수행합니다.'],
    ['AI · Satellite', 'AI · 위성'], ['CORE METHOD', '핵심 방법론'],
    ['Earth Environment', '지구 환경'], ['FIELD OF STUDY', '연구 분야'],
    ['Lab News', '연구실 소식'], ['View →', '바로가기 →'],
    ['AI and satellite research on disaster prediction, renewable energy, and climate monitoring', 'AI·위성 데이터 기반 재난 예측, 재생에너지, 기후 모니터링 연구'],
    ["The lab's journal publications since 2008", '2008년부터 이어진 연구실의 학술 논문 성과'],
    ['Conferences, seminars, lab news and photos', '학회 참석, 세미나, 연구실 소식과 사진'],
    // professor
    ['Jong-min Yeom', '염종민'], ['POSITION', '직위'], ['TEL', '전화'], ['E-MAIL', '이메일'],
    ['HOMEPAGE', '홈페이지'], ['OFFICE', '연구실'], ['Associate Prof.', '부교수'],
    ['Building 15-4, Room 207', '15-4동 207호'],
    ['RESEARCH OVERVIEW', '연구 개요'], ['KEY RESEARCH AREAS', '대표 연구 분야'], ['CURRENT PROJECTS', '진행 중인 과제'],
    ['Combines satellite remote sensing and ground observations to retrieve land-surface information, and analyzes climate, agriculture and energy variables with AI and physical models.', '위성 원격탐사 자료와 지상관측자료를 결합하여 지표환경 정보를 산출하고, 인공지능과 물리모형을 이용해 기후·농업·에너지 변수를 분석합니다.'],
    ['Key techniques: cross-sensor calibration of multi-satellite data, surface reflectance retrieval, spatiotemporal super-resolution, cloud and fog detection, and solar radiation forecasting.', '주요 기술은 다중위성 자료의 센서 간 보정, 지표반사도 산출, 시공간 초해상화, 구름·안개 탐지, 태양복사 예측입니다.'],
    ['Extracts vegetation indices, spectral and atmospheric information from MODIS, GK-2A and KOMPSAT, and validates algorithms with ASOS and ground spectral measurements.', 'MODIS와 GK-2A, KOMPSAT 등 위성자료에서 식생지수·분광정보·대기정보를 추출하고, ASOS 및 지상 분광관측 자료로 알고리즘을 검증합니다.'],
    ['Couples crop models with deep learning to predict rice growth and yield at the pixel level, extending to climate change, drought and extreme-climate monitoring and bioenergy assessment of agricultural by-products.', '작물모형과 딥러닝을 결합하여 벼 생육과 수확량을 픽셀 단위로 예측하며, 기후변화·가뭄·극한기후 감시와 농업 부산물 바이오에너지 평가로 적용 범위를 확장합니다.'],
    ['Multi-Satellite Data Fusion and AI-Based Surface Environmental Observation', '다중위성 자료 융합과 인공지능 기반 지표환경 관측'],
    ['Satellite and Crop Model Integrated Rice Growth and Yield Prediction', '위성자료와 작물모형 결합 기반 벼 생육·수확량 예측'],
    ['Geostationary Satellite-Based Solar Radiation Retrieval and Renewable Energy Forecasting', '정지궤도 위성 기반 태양복사 산출 및 재생에너지 예측'],
    ['Development of Satellite-Based Extreme Climate and Climate Change Monitoring Technology', '위성기반 극한기후·기후변화 감시 기술개발'],
    ['Spatiotemporal Super-Resolution of Surface Reflectance through Multi-Satellite Data Fusion', '다중위성 데이터 융합을 통한 지표반사도 시공간 초해상화 기술 연구'],
    ['Satellite-Based Environmental Remote Sensing', '위성 기반 환경 원격탐사'],
    ['Artificial Intelligence (Machine Learning, Deep Learning)', '인공지능 (머신러닝, 딥러닝)'],
    ['Satellite Imagery Processing and Modeling', '위성영상 처리 및 모델링'],
    ['Modeling of Renewable Energy Potential', '신재생에너지 잠재량 모델링'],
    ['Predictive Research on Global Environmental Changes', '지구 환경 변화 예측 연구'],
    ['EDUCATION', '학력'], ['EMPLOYMENT', '경력'], ['PROFESSIONAL SERVICE', '학회 활동'], ['ACHIEVEMENTS', '수상'],
    ['Ph.D. Dept. of Environmental Atmospheric Sciences, Pukyong National University, Busan, Korea (2009). Thesis: An improved design of solar surface radiation parameterization using satellite data',
     '부경대학교 환경대기과학과 이학박사 (2009). 학위논문: An improved design of solar surface radiation parameterization using satellite data'],
    ['M.Sc. Dept. of Environmental Atmospheric Sciences, Pukyong National University, Busan, Korea (2005). Dissertation: Reflectance normalization via BRDF model for the Korean vegetation using MODIS 250m Data',
     '부경대학교 환경대기과학과 이학석사 (2005). 학위논문: Reflectance normalization via BRDF model for the Korean vegetation using MODIS 250m Data'],
    ['B.Sc. Dept. of Environmental Atmospheric Sciences, Pukyong National University, Busan, Korea (2003)', '부경대학교 환경대기과학과 이학사 (2003)'],
    ['2023.04∼Present', '2023.04∼현재'], ['2013.01∼Present', '2013.01∼현재'], ['2019.10∼Present', '2019.10∼현재'],
    ['Associate Professor, Jeonbuk National University, Department of Earth and Environmental Sciences', '전북대학교 지구환경과학과 부교수'],
    ['Senior Researcher, Satellite Operation Center, Satellite Application Division, Korea Aerospace Research Institute (KARI)', '한국항공우주연구원(KARI) 위성활용부 위성운영센터 선임연구원'],
    ['Postdoctoral Researcher, Geographical Information Science Center of Excellence Department, South Dakota State University', '사우스다코타주립대학교 지리정보과학센터(GIScCE) 박사후연구원'],
    ['Postdoctoral Researcher, Brain Korea 21 Graduate School of Earth Environmental System, Pukyong National University', '부경대학교 BK21 지구환경시스템사업단 박사후연구원'],
    ['Associate editor, Korean Journal of Remote Sensing', '대한원격탐사학회지 편집위원'],
    ['Associate editor, GEO Data Journal', 'GEO DATA 편집위원'],
    ['Outstanding Academic Award, GAIDAS', 'GAIDAS 우수학술상'],
    ['Outstanding Poster Award, KOSAE', '한국대기환경학회(KOSAE) 우수포스터상'],
    ['Outstanding Research Award, KARI', '한국항공우주연구원(KARI) 우수연구상'],
    ['Outstanding thesis award, Asia GIS Academy', 'Asia GIS Academy 우수논문상'],
    // members
    ['Post-doc', '박사후연구원'], ['PhD course', '박사과정'], ['M.S. course', '석사과정'],
    ['Bachelor student', '학부연구생'], ['Team manager', '연구실 매니저'],
    ['Department of Climate, Environment and Energy', '기후환경에너지학과'],
    ['Earth and environmental science', '지구환경과학과'],
    ['Bioindustrial Machinery Engineering', '생물산업기계공학과'],
    ['Atmospheric science', '대기과학'],
    ['Former Postdoctoral Researcher · National Institute of Meteorological Sciences (Jeju)', '전 박사후연구원 · 제주 국립기상과학원 취업'],
    ['Interested in satellite applications', '위성 활용 분야에 관심'],
    ['Click a name to see their research topic.', '이름을 클릭하면 연구 주제를 볼 수 있습니다.'],
    // research
    ["We use satellite data and AI to understand Earth's environment and build a better future.", '위성자료와 인공지능으로 지구 환경을 이해하고, 더 나은 미래를 만들어갑니다.'],
    ['Click an area to see the research in detail.', '관심 있는 영역을 클릭하면 연구 내용을 확인할 수 있습니다.'],
    ['Raw satellite image', '위성 원본 영상'], ['Cloud & shadow mask', '구름·그림자 마스크'],
    ['Clouds obscure the surface', '구름이 지표를 가림'], ['Obscured pixels excluded', '가려진 화소를 제외'],
    ['Low cloud — separated from the surface', '하층운 — 지표와 떨어져 있음'], ['Fog — in contact with the surface', '안개 — 지표에 맞닿음'],
    ['Differences between satellite channels separate fog from low cloud, and the extent and duration of fog are tracked.', '위성 채널 차이로 안개와 하층운을 구분하고, 안개의 범위와 지속 시간을 추적합니다.'],
    ['Renewable Energy Analysis', '신재생에너지 분석'],
    ['Estimating solar and wind energy potential from satellite and weather data.', '위성·기상 자료로 태양광, 풍력 등 에너지 잠재량을 분석합니다.'],
    ['Satellite-observed solar radiation is combined with terrain and weather data to map where solar and wind power plants would produce the most electricity.', '위성으로 관측한 일사량과 지형·기상 자료를 결합해, 어느 지역에 태양광·풍력 발전소를 세우면 가장 많은 전기를 얻을 수 있는지 지도로 계산합니다.'],
    ['Super-Resolution Imaging', '초해상도 영상 생성'],
    ['Fusing multiple satellite images with AI to create sharper surface imagery.', '여러 위성영상을 AI로 융합해 더 선명한 지표 영상을 만듭니다.'],
    ['Images from frequent low-resolution satellites and infrequent high-resolution satellites are combined to produce surface imagery that is both frequent and sharp.', '해상도는 낮지만 자주 찍히는 위성과, 드물게 찍히지만 선명한 위성의 영상을 합쳐 자주 찍히면서도 선명한 지표 영상을 만들어 냅니다.'],
    ['Object Detection', '객체 탐지 연구'],
    ['Automatically finding buildings, roads and ships in satellite imagery with AI.', 'AI로 위성영상 속 건물, 도로, 선박을 자동으로 찾아냅니다.'],
    ['Deep learning models find targets such as buildings, vehicles and ships in satellite and aerial imagery, automating manual labeling to analyze wide areas quickly.', '딥러닝 모델이 위성·항공 영상 속의 건물, 차량, 선박 같은 대상을 스스로 찾아냅니다. 사람이 일일이 표시하던 작업을 자동화해 넓은 지역을 빠르게 분석합니다.'],
    ['Cloud Detection', '구름 탐지 연구'],
    ['Automatically masking clouds and cloud shadows in satellite imagery.', '위성영상 속 구름과 구름 그림자를 자동으로 가려냅니다.'],
    ['Clouds and shadows that obscure the surface are detected automatically. Filtering cloud-contaminated pixels ensures the accuracy of downstream analyses such as surface reflectance, vegetation and water quality.', '위성영상에서 지표를 가리는 구름과 그림자를 자동으로 찾아 표시합니다. 구름이 섞인 화소를 걸러내야 지표 반사도, 식생, 수질 같은 후속 분석의 정확도가 확보됩니다.'],
    ['Fog Detection', '안개 탐지 연구'],
    ['Observing the formation and movement of sea fog and fog with geostationary satellites.', '정지궤도 위성으로 해무와 안개의 발생·이동을 관측합니다.'],
    ['Fog over sea and land is detected from satellite data. Fog extent and movement can be tracked even over the ocean where no stations exist, supporting maritime traffic safety.', '해상과 육상에 발생하는 안개를 위성 자료로 탐지합니다. 관측소가 없는 바다 위에서도 안개의 범위와 이동을 추적할 수 있어 해상 교통 안전에 활용됩니다.'],
    ['Algae Monitoring', '조류 모니터링 연구'],
    ['Monitoring algal blooms in Saemangeum Lake and analyzing their changes with satellite data.', '위성자료로 새만금호의 조류 발생을 감시하고 변화를 분석합니다.'],
    ['Satellite imagery tracks when, where and how far algal blooms spread in Saemangeum Lake, showing water-quality changes across the whole lake without field visits.', '새만금호의 녹조가 언제, 어디서, 얼마나 번지는지를 위성 영상으로 추적합니다. 현장에 나가지 않아도 호수 전체의 수질 변화를 주기적으로 볼 수 있습니다.'],
    // publications
    ['Research Results (*Corresponding Author)', '연구 성과 (*교신저자)'],
    ['Selected Papers', '주요 논문'], ['Corresponding', '교신저자'],
    ['No results found', '검색 결과가 없습니다'], ['Try a different keyword or year.', '다른 키워드나 연도로 다시 찾아보세요.'],
    ['Total Papers', '전체 논문'], ['Corresponding Author', '교신저자 논문'], ['Active Years', '연구 기간'],
    ['Search by title, author or journal', '제목, 저자, 저널로 검색'],
    ['All', '전체'],
    // broad / contact
    ['All Posts', '전체 글'], ['Photo', '사진'], ['Notice', '공지'], ['Close', '닫기'],
    ["If you are interested in AI SEE Lab, please contact us below.", 'AI SEE Lab에 관심 있으신 분은 아래로 연락 바랍니다.'],
    ['Building 15-4, Rooms 207, 208, 214, 225', '15-4동 207, 208, 214, 225호'],
    // play
    ['Mini Game', '미니게임'], ['Open full screen', '전체 화면으로 열기'], ['Malang Malang Weather Factory', '말랑말랑 기상 제조소'], ['Malang Malang Weather Factory ↗', '말랑말랑 기상 제조소 ↗'],
    ['A weather mini-game made by our lab', '연구실에서 만든 날씨 미니게임'],
    ['Play now', '바로 플레이'], ['Scan with your phone camera to play', '휴대폰 카메라로 찍으면 바로 게임이 열려요'], ['Lab mini-game', '연구실 미니게임'],
    ['Best on a phone or tablet. The first load may take a few seconds.', '휴대폰·태블릿에서 가장 잘 돌아가요. 처음 열 때 몇 초 걸릴 수 있어요.']
  ];
  var norm = function (s) { return s.replace(/\s+/g, ' ').trim(); };
  var E2K = {}, K2E = {};
  P.forEach(function (p) { E2K[norm(p[0])] = p[1]; K2E[norm(p[1])] = p[0]; });
  // the source text is sometimes Korean-only; alumni role source is mixed
  K2E[norm('Former Postdoctoral Researcher · 제주국립기상과학원 취업')] = 'Former Postdoctoral Researcher · National Institute of Meteorological Sciences (Jeju)';
  E2K[norm('Former Postdoctoral Researcher · 제주국립기상과학원 취업')] = '전 박사후연구원 · 제주 국립기상과학원 취업';
  var RX = [
    [/^(\d+)편$/, { en: '$1', ko: '$1편' }],
    [/^(\d+)편의 논문$/, { en: '$1 papers', ko: '$1편의 논문' }]
  ];
  function tr(orig, lang) {
    var k = norm(orig); if (!k) return orig;
    var hit = lang === 'ko' ? E2K[k] : K2E[k];
    if (!hit) for (var i = 0; i < RX.length; i++) if (RX[i][0].test(k)) { hit = k.replace(RX[i][0], RX[i][1][lang]); break; }
    if (!hit || hit === k) return orig;
    var lead = orig.match(/^\s*/)[0], trail = orig.match(/\s*$/)[0];
    return lead + hit + trail;
  }
  var lang = 'en';
  try { lang = localStorage.getItem('aisee-lang2') || 'en'; } catch (e) {}
  var ORIG = new WeakMap(), SET = new WeakMap();
  function doText(n) {
    var v = n.nodeValue;
    if (!ORIG.has(n) || SET.get(n) !== v) ORIG.set(n, v);
    var out = tr(ORIG.get(n), lang);
    SET.set(n, out);
    if (out !== v) n.nodeValue = out;
  }
  function doAttr(el, a) {
    var key = '__i18n_' + a, v = el.getAttribute(a);
    if (v == null) return;
    if (el[key + 'set'] !== v) el[key] = v;
    var out = tr(el[key], lang); el[key + 'set'] = out;
    if (out !== v) el.setAttribute(a, out);
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (!/^(SCRIPT|STYLE)$/.test((root.parentNode || {}).nodeName)) doText(root); return; }
    if (root.nodeType !== 1 && root.nodeType !== 9 && root.nodeType !== 11) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null), n;
    while ((n = w.nextNode())) if (!/^(SCRIPT|STYLE)$/.test(n.parentNode.nodeName)) doText(n);
    if (root.querySelectorAll) root.querySelectorAll('[placeholder],[alt]').forEach(function (el) { doAttr(el, 'placeholder'); doAttr(el, 'alt'); });
  }
  function applyAll() {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
    walk(document.body);
  }
  var mo = new MutationObserver(function (ms) {
    ms.forEach(function (m) {
      if (m.type === 'characterData') doText(m.target);
      else if (m.type === 'attributes') doAttr(m.target, m.attributeName);
      else m.addedNodes.forEach(walk);
    });
  });
  function start() {
    applyAll();
    mo.observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'alt'] });
  }
  var subs = [];
  window.AISEE_I18N = {
    get: function () { return lang; },
    set: function (l) {
      lang = l; try { localStorage.setItem('aisee-lang2', l); } catch (e) {}
      applyAll(); subs.forEach(function (f) { f(l); });
    },
    on: function (f) { subs.push(f); }
  };
  document.documentElement.setAttribute('data-lang', lang);
  if (document.body) start(); else document.addEventListener('DOMContentLoaded', start);
})();
