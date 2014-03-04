<?php
    $lang = $_GET['lang'];
    define('IS_NL', $lang == "nl");
    define('IS_BE', $lang == "be");
?>
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Wikipedia.nl</title>
    <!-- Voor kennis en zo. Je weet! -->
    <style>
        <?php echo file_get_contents("css/style.css"); ?>
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <div id="logo" class="center col-full">
                <a href="http://www.wikipedia.org">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Wikipedia-logo-v2-wordmark.svg/180px-Wikipedia-logo-v2-wordmark.svg.png" alt="Wikipedia logo" />
                </a>
            </div>
        </div>

        <div id="searchform" class="row col-full">
            <form method="get" role="form" action="http://www.wikipedia.org/search-redirect.php">
                <div class="row">
                    <input type="text" id="search" name="search" class="col-full" />
                </div>

                <div class="row">
                    <div class="col-half">
                        <select name="language" id="language">
                            <option value="nl">Nederlands</option>
                            <?php if (IS_BE): ?>
                            <option value="fr">Français</option>
                            <?php endif; ?>
                            <?php if (IS_NL): ?>
                            <option value="fy">Frysk</option>
                            <option value="nds-nl">Nedersaksisch</option>
                            <?php endif; ?>
                            <option value="li">Limburgs</option>
                            <?php if (IS_BE): ?>
                            <option value="lb">Lëtzebuergesch</option>
                            <option value="wa">Walon</option>
                            <option value="vls">West-Vlams</option>
                            <option value="ksh">Ripoarisch</option>
                            <?php endif; ?>
                            <option value="en">English</option>
                            <option value="de">Deutsch</option>
                            <option value="es">Español</option>
                            <?php if (IS_NL): ?>
                            <option value="fr">Français</option>
                            <?php endif; ?>
                        </select>
                    </div>

                    <div class="col-half">
                        <button type="submit">
                            <?php if (IS_BE): ?>Zoeken / Rechercher<?php endif; ?>
                            <?php if (IS_NL): ?>Zoeken in Wikipedia<?php endif; ?>
                        </button>
                    </div>
                </div>
            </form>
        </div> <!-- #searchform -->

        <div class="row">
            <ul class="col-third">
                <?php if (IS_NL): ?>
                <li><a href="http://nl.wikipedia.org">Wikipedia in het Nederlands &raquo;</a></li>
                <li><a href="http://fy.wikipedia.org">Wikipedy yn it Frysk &raquo;</a></li>
                <?php endif; ?>

                <?php if (IS_BE): ?>
                <li><a href="http://nl.wikipedia.org">Wikipedia in het Nederlands &raquo;</a></li>
                <li><a href="http://lb.wikipedia.org">Wikipedia op Lëtzebuergesch &raquo;</a></li>
                <li><a href="http://vls.wikipedia.org">Wikipedia in 't West-Vlams &raquo;</a></li>
                <?php endif; ?>
            </ul>

            <ul class="col-third">
                <?php if (IS_NL): ?>
                <li><a href="http://nds-nl.wikipedia.org">Wikipedie in 't Nedersaksisch &raquo;</a></li>
                <li><a href="http://li.wikipedia.org">Wikipedia op 't Limburgs &raquo;</a></li>
                <?php endif; ?>

                <?php if (IS_BE): ?>
                <li><a href="http://fr.wikipedia.org">Wikipédia en Français &raquo;</a></li>
                <li><a href="http://wa.wikipedia.org">Wikipedia e Walon &raquo;</a></li>
                <li><a href="http://ksh.wikipedia.org">Wikkipedija för de Ripoareshe Shproache &raquo;</a></li>
                <?php endif; ?>
            </ul>

            <ul class="col-third">
                <?php if (IS_NL): ?>
                <li><a href="http://en.wikipedia.org">Wikipedia in English &raquo;</a></li>
                <li><a href="http://de.wikipedia.org">Wikipedia in Deutsch &raquo;</a></li>
                <?php endif; ?>

                <?php if (IS_BE): ?>
                <li><a href="http://de.wikipedia.org">Wikipedia in Deutsch &raquo;</a></li>
                <li><a href="http://li.wikipedia.org">Wikipedia op 't Limburgs &raquo;</a></li>
                <li><a href="http://en.wikipedia.org">Wikipedia in English &raquo;</a></li>
                <?php endif; ?>
            </ul>
        </div>

        <div class="row">
            <div class="center col-full">
                &laquo;
                <a href="#morelanguages" data-toggle="toggle">
                    meer talen -
                    d'autres langues -
                    more languages -
                    mehr Sprachen
                </a>
                &raquo;
            </div>
        </div>

        <div class="row">
            <div class="center col-full">
                <ul id="morelanguages" class="inline-list toggle toggle-hidden">
                    <?php
                        $lang = json_decode(file_get_contents("languages.json"));
                        foreach($lang as $code => $lang) {
                            printf(
                                '<li><a href="http://%s.wikipedia.org">%s</a></li>',
                                $code, $lang
                            );
                        }
                    ?>
                </ul>
            </div>
        </div>

        <div class="row">
            <hr />
        </div>

        <div class="row">
            <a href="http://www.wikimedia.org">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Wikimedia-logo.svg/50px-Wikimedia-logo.svg.png" alt="Wikimedia logo" class="image-right" width="50" />
            </a>

            <div style="margin-top:8px;"></div>

            <?php if (IS_NL): ?>
            <p>Wikipedia is een project van de <a href="http://www.wikimediafoundation.org">Wikimedia Foundation</a>.</p>

            <p>Steun vrije kennis: <a href="http://www.wikimedia.nl">word lid van de Vereniging Wikimedia Nederland</a>.</p>
            <?php endif; ?>

            <?php if (IS_BE): ?>
            <p>Wikipedia is een project van de <a href="http://www.wikimediafoundation.org">Wikimedia Foundation</a> / Wikipedia est un projet de la <a href="http://www.wikimediafoundation.org">Wikimedia Foundation</a></p>

            <br />

            <p>Steun vrije kennis: <a href="http://www.wikimedia.nl">word lid van de Vereniging Wikimedia Nederland</a> / Soutenir le savoir libre: devenir membre de <a href="http://www.wikimedia.nl">l'Association Wikimedia Pays-Bas</a>.</p>

            <br />

            <p>Help mee met het oprichten van <a href="http://www.wikimedia.be">Wikimedia België</a> / Aider à fonder <a href="http://www.wikimedia.be">Wikimedia Belgique</a>.</p>
            <?php endif; ?>
        </div>
    </div>

    <!-- Only include for IE8 and later -->
    <!--[if (gte IE 9)|!(IE)]><!-->
    <script>
        <?php
            echo file_get_contents("js/minidom.js");
            echo file_get_contents("js/app.js");
        ?>
        window.app = new App();
    </script>
    <!--<![endif]-->
</body>
</html>