export const mainContent = `
    <div class="main-content flex">
        <div class="star">
            <img tabindex="0" src="images/icon-star.svg" alt="star" class="star" />
        </div>
        <div class="heading flex">
            <h1 tabindex="0">How did we do?</h1>
            <p tabindex="0">
                Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
        </div>        
        <div class="ratings flex">
            <button class="rating-btn" data-rating="1" aria-label="1 star rating">1</button>
            <button class="rating-btn" data-rating="2" aria-label="2 star rating">2</button>
            <button class="rating-btn" data-rating="3" aria-label="3 star rating">3</button>
            <button class="rating-btn" data-rating="4" aria-label="4 star rating">4</button>
            <button class="rating-btn" data-rating="5" aria-label="5 star rating">5</button>
        </div>
        <button class="submit-btn">SUBMIT</button>
    </div>
    <div class="main-content thank-you flex">        
        <img tabindex="0" src="images/illustration-thank-you.svg" alt="generic computer input output image" class="thank-you-image" />        
        <div tabindex="0" class="thank-you-selected">
            <span>You selected <span id="selected-rating"></span> <span> out of 5</span>
        </div>
        <p tabindex="0" class="large">Thank you!</p>
        <p  tabindex="0" class="small">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>        
    </div>
`;
