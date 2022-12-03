export const trending = (req, res) => {
  const videos = [
    {
      title: 'Hello',
      title: 'First Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Video #2',
      title: 'Second Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'Whatsup',
      title: 'Third Video',
      rating: 5,
      comments: 2,
      createdAt: '2 minutes ago',
      views: 59,
      id: 1,
    },
  ];

  res.render('home', { pageName: 'Home', videos });
};
export const see = (req, res) => res.send('Watch Video');
export const edit = (req, res) => res.send('Edit Video');
export const remove = (req, res) => res.send('Delete Video');
export const search = (req, res) => res.send('Search Video');
export const upload = (req, res) => res.send('Upload Video');
