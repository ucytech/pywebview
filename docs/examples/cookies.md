# Cookie and local storage support

``` python
import webview


"""
This example demonstrates how to use cookies and local storage
"""

def read_cookies(window):
    # set a cookie in the application window for this object not to be empty
    cookies = window.get_cookies()
    for c in cookies:
        print(c.output())


if __name__ == '__main__':
    window = webview.create_window('Cookie example', 'assets/cookies.html')
    webview.start(read_cookies, window, private_mode=False)
```
