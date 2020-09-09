function validateBody (ctx) {
  ctx.checkBody('ignoreBefore').optional().toDate()
  ctx.checkBody('maxReports').toInt()
  ctx.checkBody('ignoreCache').optional().toBoolean()
  ctx.checkBody('includeRawResult').optional().toBoolean()
  ctx.checkBody('checkSelf').toBoolean()
  ctx.checkBody('checkInputs').toBoolean()
}

exports.validateBody = validateBody
