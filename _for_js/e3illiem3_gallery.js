const gallery = {
    data_rooms: function (_this) {
        $('body').append(`
         <div id="gallery-area" class="">
                <div id="bg-out-gallery">
                </div>
                <div id="bg-in-gallery">
                    <div class="container my-5 ">
                        <div class="text-end my-2 d-flex justify-content-end">
                            <div id="close_gallery" onclick="gallery.close_gallery()">
                            X
                            </div>
                        </div>
                        <div style="overflow-y: auto; height: 100vh">
                            <img
                                id="img-big"
                                src="${$(_this).attr('pic-path')}"
                                class="w-100"
                            >
                        </div>
                    </div>
                    <div id="nav-list-gallery"></div>
                </div>
            </div>
        `)
        $('body').addClass('overflow-hidden')
        var data_gallery = $(_this).attr('data-gallery')
        const count_data_gallery = $(`[data-gallery=${data_gallery}]`).length
        for (var i = 0; i < count_data_gallery; i += 1) {
            $('#nav-list-gallery').append(`
                        <img
                            src="${$(`[data-gallery=${data_gallery}]`)[i].attributes['pic-path']['value']}"
                            style="width:60px;height:40px;border-radius: 5px;cursor: pointer"
                            class="mx-1 img-min"
                            onclick="gallery.chang_img_big(this,'${$(`[data-gallery=${data_gallery}]`)[i].attributes['pic-path']['value']}')"
                        >
            `)
        }
        $(`.img-min[src='${$(_this).attr('pic-path')}']`).css('border', '2px solid white')
    },
    close_gallery: function () {
        $('#gallery-area').fadeOut(300, () => {
            $('#gallery-area').remove()
        })
        $('body').removeClass('overflow-hidden')
    },
    chang_img_big: function (_this, _pic) {
        $('#img-big').attr('src', _pic)
        $('.img-min').css('border', 'unset')
        $(_this).css('border', '2px solid white')
    }
}
