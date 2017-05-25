import url from "url";
import { BrowserPolicy } from "meteor/browser-policy-common";
import { WebApp } from "meteor/webapp";

BrowserPolicy.content.allowOriginForAll("placehold.it");
BrowserPolicy.content.allowOriginForAll("*.imgix.net");
