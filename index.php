<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/x-icon" href="images/favicon.ico">
    <title>Dhwity Enterprise</title>
    <link rel="stylesheet" href="css/style.css" />
    <!-- bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
</head>

<body>
    <script>
        function product(title) {
            let msg = `I want to Order products of ${title}`
            let elem = `<div class="product_card">
                    <h4 class="title fw-bold">${title}</h4>
                    <div class="company d-flex flex-column">
                        <span class="text-secondary lh-1">Company</span>
                        <span class="company_name">Undefined</span>
                    </div>
                    <a href="https://wa.me/919898490529?text=${msg}" target="_blank" class="whatsapp_order"><img src="images/whatsapp_order.svg" alt="Whatsapp Order"><span>Order Now</span></a>
                </div>`;
            document.write(elem);
        }
    </script>

    <!-- preloader -->
    <div class="container-fluid" id="preloader">
        <div class="d-flex flex-column align-items-center">
            <img src="images/outer.png" class="outer_img">
            <img src="images/inner.png" class="inner_img">
        </div>
    </div>

    <!-- brand nav  -->
    <nav id="brand">
        <div id="header_logo">
            <img src="images/outer.png" class="outer_img">
            <img src="images/inner.png" class="inner_img">
        </div>
        <div class="heading">
            <h1><span>Dhwity</span> <span>Enterprise</span></h1>
            <span class="tagline">Pure and Flavourful</span>
        </div>
    </nav>

    <p class="info_paragraph fs-6 lh-sm mx-auto my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nemo, eaque voluptate magni deserunt aut exercitationem quia quae modi voluptatibus. A, reiciendis ex? Asperiores quidem, laboriosam expedita dolor quas amet ipsum.</p>

    <main>
        <div class="product_container">
            <div class="company_heading px-sm-5 px-3 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="images/Vasant.webp" alt="Vasant masala">
                    <h5>Vasant Masala</h5>
                </div>
                <a href="Vasant_masala.php" class="text-dark text-decoration-none text-nowrap"><span>Show all</span><img src="images/angle_right.svg" alt=""></a>
            </div>
            <div class="product_card_wrapper px-sm-5 px-3" data-company="Vasant Masala">
                <script>
                    product("Garam masala powder");
                    product("Garam masala powder");
                    product("Garam masala powder");
                </script>
            </div>
        </div>
        <div class="product_container">
            <div class="company_heading px-sm-5 px-3 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="images/Perfetti.webp" alt="Perfetti">
                    <h5>Perfetti</h5>
                </div>
                <a href="Perfetti.php" class="text-dark text-decoration-none text-nowrap"><span>Show all</span><img src="images/angle_right.svg" alt=""></a>
            </div>
            <div class="product_card_wrapper px-sm-5 px-3" data-company="Perfetti">
                <script>
                    product("Garam masala powder");
                    product("Garam masala powder");
                    product("Garam masala powder");
                </script>
            </div>
        </div>
        <div class="product_container">
            <div class="company_heading px-sm-5 px-3 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="images/Eveready.webp" alt="Eveready">
                    <h5>Eveready</h5>
                </div>
                <a href="Eveready.php" class="text-dark text-decoration-none text-nowrap"><span>Show all</span><img src="images/angle_right.svg" alt=""></a>
            </div>
            <div class="product_card_wrapper px-sm-5 px-3" data-company="Eveready">
                <script>
                    product("Garam masala powder");
                    product("Garam masala powder");
                    product("Garam masala powder");
                </script>
            </div>
        </div>
        <div class="product_container">
            <div class="company_heading px-sm-5 px-3 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-3">
                    <img src="images/Thames.webp" alt="Thames">
                    <h5>Thames</h5>
                </div>
                <a href="Thames.php" class="text-dark text-decoration-none text-nowrap"><span>Show all</span><img src="images/angle_right.svg" alt=""></a>
            </div>
            <div class="product_card_wrapper px-sm-5 px-3" data-company="Thames">
                <script>
                    product("Garam masala powder");
                    product("Garam masala powder");
                    product("Garam masala powder");
                </script>
                <!-- <a href="Vasant_masala" class="product_card last_card">
                    <div class="rounded-circle bg-light">
                        <img src="images/angle_right.svg" alt="Show all">
                    </div>
                    <span>Show all</span>
                </a> -->
            </div>
        </div>
    </main>

    <!-- fixed whatsapp chat btn -->
    <a id="whatsapp_chat"><img src="images/whatsapp_chat.svg" alt="Whatsapp chat icon"></a>

    <footer>

    </footer>

    <!-- bootstrap cdn  -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- ajax & jquery cdn -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script> -->
    <!-- script.js link-->
    <script src="script.js"></script>

</body>

</html>