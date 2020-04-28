import React from "react";
import PropTypes from "prop-types";

export default function ImageShowcase({imageUrl}){
    console.log(imageUrl)
    

    const myStyle = {
        backgroundImage: "url(" + imageUrl + ")", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle2 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc5sucx-1d6b8075-ca56-4a7e-9ed4-f7f568362195.png/v1/fill/w_1600,h_900,q_80,strp/triss_lightened_or_lit__by_geekmasterrated_dc5sucx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzVzdWN4LTFkNmI4MDc1LWNhNTYtNGE3ZS05ZWQ0LWY3ZjU2ODM2MjE5NS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fUUDa2zB-PjlzW1klkKBi1A9lPgw9bxzzz_WKGQ2_gg)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle3 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc4v4dz-052c71bb-9b70-4226-b90d-4b8839adfc54.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYTVkZGE5LTkyZjMtNDM5MS1hNDM5LTQxYTJhYTY3ZDNjMVwvZGM0djRkei0wNTJjNzFiYi05YjcwLTQyMjYtYjkwZC00Yjg4MzlhZGZjNTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8UdB-FdjHTKOZask6oBvfhvxXUJLuX_osOnyJpFUMzk)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle4 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc4qp62-a5ebe5a7-6bc5-47c7-978d-3294c419efb5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYTVkZGE5LTkyZjMtNDM5MS1hNDM5LTQxYTJhYTY3ZDNjMVwvZGM0cXA2Mi1hNWViZTVhNy02YmM1LTQ3YzctOTc4ZC0zMjk0YzQxOWVmYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2goA94kerwphd8h0Tfv4sP3asMBZWXfNzf9a74R7qP0)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle5 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc5i19q-c8af0bba-76ba-4703-8783-86f427a5ec93.png/v1/fill/w_1600,h_900,q_80,strp/minimalistic_rog_z370_motherboard_by_geekmasterrated_dc5i19q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzVpMTlxLWM4YWYwYmJhLTc2YmEtNDcwMy04NzgzLTg2ZjQyN2E1ZWM5My5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KLwstgkXQC_0FxlZqbaLOsyvzL480DXNLwb7uq-JV0Q)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle6 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc9ii8u-8407fcf0-fc71-4978-8855-963bacd9b8df.png/v1/fill/w_1600,h_900,q_80,strp/nvidia_gtx_1080ti_by_geekmasterrated_dc9ii8u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzlpaTh1LTg0MDdmY2YwLWZjNzEtNDk3OC04ODU1LTk2M2JhY2Q5YjhkZi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wrutfeiV8YQc7oKMsso9WH1MIXl39LJ39_feQVDe8Kg)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    const myStyle7 = {
        backgroundImage: "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dckr6lq-a8cc1870-e442-40ed-9015-1988fcdd61ff.png/v1/fill/w_1600,h_900,q_80,strp/msi_gaming_x_by_geekmasterrated_dckr6lq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kY2tyNmxxLWE4Y2MxODcwLWU0NDItNDBlZC05MDE1LTE5ODhmY2RkNjFmZi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.afEckZxsc0abZgWeLRdXwDCeUV8MsORpaFTxWJiB_N0)", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    
    return(
        <div className="image__container">
            <div className="image__container--showcase" id={"showcase"} style={myStyle}>
            </div>
            <div className="image__container--preview-container">
                <div onClick={changeImage} className="image__container--preview active"><div id={"0"} style={myStyle} className={imageUrl} href={imageUrl}></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"1"} style={myStyle} className={imageUrl} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"2"} style={myStyle} className={imageUrl} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"3"} style={myStyle} className={imageUrl} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"4"} style={myStyle2} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc5sucx-1d6b8075-ca56-4a7e-9ed4-f7f568362195.png/v1/fill/w_1600,h_900,q_80,strp/triss_lightened_or_lit__by_geekmasterrated_dc5sucx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzVzdWN4LTFkNmI4MDc1LWNhNTYtNGE3ZS05ZWQ0LWY3ZjU2ODM2MjE5NS5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fUUDa2zB-PjlzW1klkKBi1A9lPgw9bxzzz_WKGQ2_gg"} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"5"} style={myStyle3} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc4v4dz-052c71bb-9b70-4226-b90d-4b8839adfc54.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYTVkZGE5LTkyZjMtNDM5MS1hNDM5LTQxYTJhYTY3ZDNjMVwvZGM0djRkei0wNTJjNzFiYi05YjcwLTQyMjYtYjkwZC00Yjg4MzlhZGZjNTQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8UdB-FdjHTKOZask6oBvfhvxXUJLuX_osOnyJpFUMzk"} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"6"} style={myStyle4} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc4qp62-a5ebe5a7-6bc5-47c7-978d-3294c419efb5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwYTVkZGE5LTkyZjMtNDM5MS1hNDM5LTQxYTJhYTY3ZDNjMVwvZGM0cXA2Mi1hNWViZTVhNy02YmM1LTQ3YzctOTc4ZC0zMjk0YzQxOWVmYjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2goA94kerwphd8h0Tfv4sP3asMBZWXfNzf9a74R7qP0"} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"7"} style={myStyle5} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc5i19q-c8af0bba-76ba-4703-8783-86f427a5ec93.png/v1/fill/w_1600,h_900,q_80,strp/minimalistic_rog_z370_motherboard_by_geekmasterrated_dc5i19q-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzVpMTlxLWM4YWYwYmJhLTc2YmEtNDcwMy04NzgzLTg2ZjQyN2E1ZWM5My5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KLwstgkXQC_0FxlZqbaLOsyvzL480DXNLwb7uq-JV0Q"} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"8"} style={myStyle6} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dc9ii8u-8407fcf0-fc71-4978-8855-963bacd9b8df.png/v1/fill/w_1600,h_900,q_80,strp/nvidia_gtx_1080ti_by_geekmasterrated_dc9ii8u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kYzlpaTh1LTg0MDdmY2YwLWZjNzEtNDk3OC04ODU1LTk2M2JhY2Q5YjhkZi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wrutfeiV8YQc7oKMsso9WH1MIXl39LJ39_feQVDe8Kg"} ></div></div>
                <div onClick={changeImage} className="image__container--preview"><div id={"9"} style={myStyle7} className={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/80a5dda9-92f3-4391-a439-41a2aa67d3c1/dckr6lq-a8cc1870-e442-40ed-9015-1988fcdd61ff.png/v1/fill/w_1600,h_900,q_80,strp/msi_gaming_x_by_geekmasterrated_dckr6lq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvODBhNWRkYTktOTJmMy00MzkxLWE0MzktNDFhMmFhNjdkM2MxXC9kY2tyNmxxLWE4Y2MxODcwLWU0NDItNDBlZC05MDE1LTE5ODhmY2RkNjFmZi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.afEckZxsc0abZgWeLRdXwDCeUV8MsORpaFTxWJiB_N0"} ></div></div>
            </div>
        </div>
    )
}

function changeImage(data){
    var activeClass = document.getElementsByClassName("active")[1],
        previewImage = document.getElementsByClassName("image__container--preview")[Number(data.target.id)],
        showcaseImage = document.getElementById("showcase");
    activeClass.classList.remove("active")
    console.log(data.target.classList[0]);
    previewImage.classList.add("active")
    showcaseImage.style.backgroundImage = "url(" + data.target.classList[0] + ")";
}
ImageShowcase.propTypes = {
    imageUrl: PropTypes.string.isRequired,
}
