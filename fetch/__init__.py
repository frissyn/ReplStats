import json
import requests

BASE = "https://repl-stats.amasad.repl.co"
ENDPOINTS = ["/hits_by_day"]

def _tie(value: str, i: int):
    url = BASE + ENDPOINTS[i] + f"/{value}"
    return url


def general_stats(url: str):
    r = requests.get(_tie(url, 0))
    r.raise_for_status()

    vals = r.json()
    stats = {
        "max": None,
        "min": None,
        "raw_hits": [],
        "raw_days": [],
        "values": []
    }

    for valset in vals:
        stats["values"].append(valset)
        stats["raw_hits"].append(valset["hits"])
        stats["raw_days"].append(valset["day"])

    stats["max"] = max(stats["raw_hits"])
    stats["min"] = min(stats["raw_hits"])

    return stats