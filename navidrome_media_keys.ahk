; Media_Play_Pause::ControlSend("{Media_Play_Pause}hiii" , , "Navidrome", , , )

; msg = WM_APPCOMMAND; lParam = APPCOMMAND_MEDIA_PLAY_PAUSE
Media_Play_Pause::PostMessage(0x319,, 0xE0000,, "ahk_exe Navidrome.exe")