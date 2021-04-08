az.hold_value.events = {
    preview_video: function() {
        az.call_once_satisfied({
            "condition": "typeof(az.hold_value.config) !== 'undefined'",
            "function": function() {
                az.add_video("main_layout_cells", 2, {
                    "this_class": "video",
                    "video_path": az.hold_value.config.path_to_videos + "PointMovingOnShapes.mp4"
                })
                az.style_video("video", 1, {
                    "align": "center",
                    "border-radius" : "10px",
                    "border" : "2px solid #7f8fa6",
                    "width" : "700px"
                })
            }
        })
    }
}