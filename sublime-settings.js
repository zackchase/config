// Settings in here override those in "Default/Preferences.sublime-settings",
// and are overridden in turn by file type specific settings.

{

    // Whitespace - no tabs, trimming, end files with \n
        "tab_size": 4,
        "translate_tabs_to_spaces": true,
        "trim_trailing_white_space_on_save": true,
        "ensure_newline_at_eof_on_save": true,

        // Sidebar - exclude distracting files and folders
        "file_exclude_patterns":
            [
                ".DS_Store",
                "*.pid",
                "*.pyc"
            ],
        "folder_exclude_patterns":
        [
            ".git",
            "__pycache__",
            "env",
            "env3"
        ],

        "hot_exit": false,
        "remember_open_files" : false,

}

