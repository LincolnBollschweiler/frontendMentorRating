export const events = () => {
  $(document)
    .off("click", ".rating-btn")
    .on("click", ".rating-btn", (e) => {
      const rating = $(e.target).data("rating");
      $(".rating-btn").removeClass("active");
      $(`.rating-btn[data-rating="${rating}"]`).addClass("active");
      $("#selected-rating").text(rating);
    })
    .off("click", ".submit-btn")
    .on("click", ".submit-btn", () => {
      $(".main-content").hide();
      $(".thank-you").css("display", "flex");
    });
};
