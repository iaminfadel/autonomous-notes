// sidebars.js
const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'Getting Started',
      id: 'intro'
    },
    {
      type: 'category',
      label: 'ROS',
      items:[
        {
          type: 'doc',
          label: 'Introduction to ROS',
          id: 'ROS/intro'
        },
        'ROS/Installation',
      ]
    },
    {
      type: 'category',
      label: 'Modeling and Simulation',
      items: [
        {
          type: 'doc',
          label: 'Introduction to Motion Planning',
          id: 'modules/motion-planning/intro'
        }
      ]
    },
    {
      type: 'category',
      label: 'Control and Navigation',
      items:[
        {
          type: 'doc',
          label: 'Introduction to Motion Planning',
          id: 'modules/motion-planning/intro'
        }
      ]
    },
    {
      type: 'category',
      label: 'State Estimation and Localization',
      items:[
        {
          type: 'doc',
          label: 'Introduction to Motion Planning',
          id: 'modules/motion-planning/intro'
        }
      ]
    },
    {
      type: 'category',
      label: 'Perception',
      items: [
        {
          type: 'doc',
          label: 'Introduction to Motion Planning',
          id: 'modules/motion-planning/intro'
        }
      ]
    },
    {
      type: 'category',
      label: 'Motion Planning',
      items: [
        {
          type: 'doc',
          label: 'Introduction to Motion Planning',
          id: 'modules/motion-planning/intro'
        }
      ]
    },
    {
      type: 'category',
      label: 'Additional Resources',
      items: [
        {
          type: 'doc',
          label: 'Resources',
          id: 'resources'
        },
        {
          type: 'doc',
          label: 'Software Tools',
          id: 'software-tools'
        },
        {
          type: 'doc',
          label: 'Useful Repos',
          id: 'useful-repos'
        }
      ]
    }

  ],
};

module.exports = sidebars;