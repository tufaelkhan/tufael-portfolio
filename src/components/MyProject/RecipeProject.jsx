import recipe1 from '../../assets/recipe1.png'
import recipe2 from '../../assets/recipe2.png'
import recipe3 from '../../assets/recipe3.png'
import recipe4 from '../../assets/recipe4.png'


const RecipeProject = () => {
    return (
        <div>
                        {/* toys school */}
                        <div className="hero w-full">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center sm:text-left lg:text-left w-1/2 font-serif pl-10">
      <h1 className="text-3xl font-bold mb-3">Special Recipe!</h1>
      <ul>
        <li>All visitors can see all Items</li>
        <li>Without login can not see sheape details</li>
        <li>Without login can not see Favoriti Recipe</li>
        <li>User login he/she see recipe details</li>
      </ul>
      <div className='mt-5 flex'>

      <a href="https://bangladeshi-special-recipe.web.app/" className='btn btn-outline btn-secondary mr-5' target='blank'>Live site</a>
      <a href="https://github.com/tufaelkhan/chef-recipe-client" className='btn btn-outline btn-secondary mr-5' target='blank'>Client site</a>
      <a href="https://github.com/tufaelkhan/chef-recepe-server" className='btn btn-outline btn-secondary mr-5' target='blank'>Server site</a>
      </div>
    </div>
    <div className="card flex-shrink-0 w-[55%] border-4 border-black">
     <div className='flex'>
     <img src={recipe1} style={{height: 150}} alt="" />
<img src={recipe2} style={{height: 150}} alt="" />
     </div>
     <div className='flex'>
     <img src={recipe3} style={{height: 150}} alt="" />
<img src={recipe4} style={{height: 150}} alt="" />
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default RecipeProject;