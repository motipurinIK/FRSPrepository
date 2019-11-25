from bottle import route, run, template
from bottle import get, post, request

import cgi


@route('/FRSP001', method='GET')
def index():
    # 画像アップロード用の画面を返す
    return template('FRSP001')

# 画像アップロード後、「測定する」ボタンを押下する
@route('/imageUpload', method='POST')
def index():
    form = cgi.FieldStorage()
    faceImage = form["faceImage"].value
    return template('imageSubmit')

run(host='localhost', port=8080, reloader=True, debug=True)