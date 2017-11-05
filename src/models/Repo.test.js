import Repo from './Repo';

describe('Repo', () => {
  it('is new-able', () => {
    const subject = new Repo({
      id: 123,
      full_name: 'facebook/react',
      name: 'react',
      language: 'JavaScript'
    })
    expect(subject.fullName).toEqual('facebook/react')
  })
});