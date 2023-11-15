import './blog.css';
import Article from '../../components/article/Article';
import blog1 from '../../assets/Wavy.jpg';
import blog2 from '../../assets/9814.jpg';
import blog3 from '../../assets/photo.jpg';
import blog4 from '../../assets/pp.jpg';


function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'> 
        A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
            <Article imgUrl={blog1} 
            date='Sep 25, 2020'
            title="GPT-3 and Open AI is the future. Let us explore how how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
            <Article 
            imgUrl={blog2} 
            date='Jul 20, 2020' 
            title="GPT-3 and Open AI is the future. Let us explore how how it is?" />
            <Article 
            imgUrl={blog3} 
            date='Mar 2, 2020'
            title="GPT-3 and Open AI is the future. Let us explore how how it is?" />
           <Article 
            imgUrl={blog4} 
            date='Feb 21, 2020'
            title="GPT-3 and Open AI is the future. Let us explore how how it is?" />
             <Article 
            imgUrl={blog1} 
            date='Feb 21, 2020'
            title="GPT-3 and Open AI is the future. Let us explore how how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog
