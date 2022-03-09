/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  process: [
    'process',                  // 모든 프로젝트를 한번에 볼 수 있도록 핵심만 표시
    'process/aspice_cl2',    // 각 프로젝트 상세 내용을 기술
    'process/iso26262',
    'process/redmine',
    'process/aspice_cl3',
    'process/sunroof_system_design',
    'process/agile_by_github',
    'process/agile_by_mbd',
  ],
  mbd: [
    'mbd',
    'mbd/study',
    'mbd/window_autobox',
    'mbd/traindoor_uml',
    'mbd/temperature',
    'mbd/wiper',
    {
      type: 'category',
      label: '윈도우',
      collapsed: false,
      items: [
        {
          'desing': ['mbd/window/window_design', 
                    'mbd/window/window_realize',
                    'mbd/window/window_verify'],
          'realize': ['mbd/window/window_realize'],
          'verify': ['mbd/window/window_verify'],
        }
      ],
    },
    'mbd/kalman_filter',
  ],
  embedded: [
    'embedded',
    'embedded/paper',
    'embedded/linux',
    'embedded/Iap',
    'embedded/train_door',
    'embedded/python',
    'embedded/esp32',
  ],
};
