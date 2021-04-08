az.load_font("Oswald")

az.style_page({
    "background": "#2f3640",
    "margin": "0px"
})
az.style_body({
    "background": "#2f3640",
    "margin": "0px"
})
az.add_sections({
    "this_class": "main_section",
    "sections": 1
})
az.style_sections("main_section", 1, {
    "background": "transparent",
    "width": "100%",
    "height": "100vh"
})
az.add_layout("main_section", 1, {
    "this_class": "logo_layout",
    "row_class": "logo_layout_rows",
    "cell_class": "logo_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("logo_layout", 1, {
    "width" : "auto",
    "height": "auto",
    "margin-left" : "20px",
    "border" : 0
})
az.add_image("logo_layout_cells", 1, {
    "this_class" : "logo",
    "image_path" : "img/manim_logo.png"
})
az.style_image("logo", 1, {
    "width" : "150px"
})
az.add_text("logo_layout_cells", 2, {
    "this_class" : "logo_text",
    "text" : "GUI"
})
az.style_text("logo_text", 1, {
    "color" : "#dcdde1",
    "font-size" : "60px",
    "font-family" : "Oswald",
    "margin-left" : "10px",
    "margin-top"  : "-10px",
    "font-style" : "italic"
})
az.add_layout("main_section", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("main_layout", 1, {
    "column_widths": ["20%", "80%"],
    "width": "1350px",
    "min-width": "1350px",
    "height": "95vh",
    "margin-left": "-30px",
    "align": "center",
    "border" : 0
})
az.style_layout("main_layout_cells", 1, {
    "background": "#7f8fa6"
})
az.style_layout("main_layout_cells", 2, {
    "background": "#353b48"
})
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.events) !== 'undefined'",
    "function": function() {
        az.hold_value.events.preview_video()
    }
})