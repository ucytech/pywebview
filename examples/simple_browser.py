"""This example demonstrates how to create a webview window."""

import webview

if __name__ == '__main__':
    # Create a standard webview window
    window = webview.create_window('Simple browser', 'https://pywebview.flowrl.com/hello')
    webview.start()
