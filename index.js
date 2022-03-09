// category
var categoryitemlink=document.querySelectorAll('.category-item__link')
categoryitemlink.forEach(i=>i.addEventListener('mouseover',hihi))
function hihi(){
    this.classList.add('category-item--active')
}
categoryitemlink.forEach(i=>i.addEventListener('mouseout',hihi1))
function hihi1(){
    this.classList.remove('category-item--active')
}
// favorite like heart
var heart=document.querySelector('.home-product-item-heart')
heart.addEventListener('click',heartAction)
function heartAction()
{
    if(this.classList.contains('home-product-item-heart--liked')==true)
    {
        this.classList.remove('home-product-item-heart--liked')
    }
    else
    {
        this.classList.add('home-product-item-heart--liked')
    }
}
// stars

var stars = document.querySelectorAll('.home-product-item-starsRate')
stars.forEach(i=>i.addEventListener('click',starsAction))
function starsAction()
{
    if(this.classList.contains('starsnum1'))
    {
        for(let i=0;i<stars.length;i++)
        {
            if(i<=0){stars[i].classList.add('starsRateColor')}
            else
            {
                if(stars[i].classList.contains('starsRateColor'))
                {
                    stars[i].classList.remove("starsRateColor")
                }
            }
        }
    }
    else if(this.classList.contains('starsnum2'))
    {
        for(let i=0;i<stars.length;i++)
        {
            if(i<=1){stars[i].classList.add('starsRateColor')}
            else
            {
                if(stars[i].classList.contains('starsRateColor'))
                {
                    stars[i].classList.remove("starsRateColor")
                }
            }
        }
    }
    else if(this.classList.contains('starsnum3'))
    {
        for(let i=0;i<stars.length;i++)
        {
            if(i<=2){stars[i].classList.add('starsRateColor')}
            else
            {
                if(stars[i].classList.contains('starsRateColor'))
                {
                    stars[i].classList.remove("starsRateColor")
                }
            }
        }
    }
    else if(this.classList.contains('starsnum4'))
    {
        for(let i=0;i<stars.length;i++)
        {
            if(i<=3){stars[i].classList.add('starsRateColor')}
            else
            {
                if(stars[i].classList.contains('starsRateColor'))
                {
                    stars[i].classList.remove("starsRateColor")
                }
            }
        }
    }
    else
    {
        for(let i=0;i<stars.length;i++)
        {
            if(i<=4){stars[i].classList.add('starsRateColor')}
            else
            {
                if(stars[i].classList.contains('starsRateColor'))
                {
                    stars[i].classList.remove("starsRateColor")
                }
            }
        }
    }

}