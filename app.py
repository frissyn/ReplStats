import flask
import fetch

app = flask.Flask(__name__)


@app.route("/")
def index():
    return flask.render_template("index.html")


@app.route("/robots.txt")
def robots():
    return flask.send_file("static/robots.txt")


@app.route("/stats/<path:url>")
def stats(url: str):
    try:
        stats = fetch.general_stats(url)
    except Exception as e:
        print(e)
        return flask.render_template("err.html", name=url)
    else:
        return flask.render_template("stats.html", name=url, stats=stats)


app.run(host="0.0.0.0", port=8080, threaded=True, debug=False)
