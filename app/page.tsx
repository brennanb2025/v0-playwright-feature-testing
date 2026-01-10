"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

// Github push test

export default function PlaywrightTester() {
  const [messages, setMessages] = useState<{ [key: string]: string }>({})
  const [inputValue, setInputValue] = useState("")
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [selectValue, setSelectValue] = useState("")
  const [pressedKey, setPressedKey] = useState("")
  const [uploadedFile, setUploadedFile] = useState<string>("")

  const showMessage = (action: string) => {
    setMessages((prev) => ({ ...prev, [action]: `Success: ${action} action completed!` }))
  }

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === "iframe-click") {
        showMessage("iframe-click")
      } else if (event.data === "iframe-fill") {
        showMessage("iframe-fill")
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="mb-2 text-4xl font-bold text-slate-900">Playwright Testing Playground</h1>
          <p className="text-slate-600">Test all Playwright interactions in one place</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Click */}
          <Card>
            <CardHeader>
              <CardTitle>Click</CardTitle>
              <CardDescription>Test single click action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button data-testid="click-button" onClick={() => showMessage("click")} className="w-full">
                Click Me
              </Button>
              {messages.click && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="click-message">{messages.click}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Double Click */}
          <Card>
            <CardHeader>
              <CardTitle>Double Click</CardTitle>
              <CardDescription>Test double click action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                data-testid="dblclick-button"
                onDoubleClick={() => showMessage("dblclick")}
                className="w-full"
                variant="secondary"
              >
                Double Click Me
              </Button>
              {messages.dblclick && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="dblclick-message">{messages.dblclick}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Fill */}
          <Card>
            <CardHeader>
              <CardTitle>Fill</CardTitle>
              <CardDescription>Test input fill action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                data-testid="fill-input"
                placeholder="Type something..."
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value)
                  if (e.target.value) {
                    showMessage("fill")
                  }
                }}
              />
              {messages.fill && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="fill-message">{messages.fill}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Hover */}
          <Card>
            <CardHeader>
              <CardTitle>Hover</CardTitle>
              <CardDescription>Test hover action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                data-testid="hover-target"
                onMouseEnter={() => showMessage("hover")}
                className="flex h-24 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-slate-300 bg-slate-50 transition-colors hover:border-slate-400 hover:bg-slate-100"
              >
                Hover over me
              </div>
              {messages.hover && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="hover-message">{messages.hover}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Check */}
          <Card>
            <CardHeader>
              <CardTitle>Check</CardTitle>
              <CardDescription>Test checkbox check action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  data-testid="check-checkbox"
                  checked={checkboxChecked}
                  onCheckedChange={(checked) => {
                    setCheckboxChecked(checked as boolean)
                    if (checked) {
                      showMessage("check")
                    }
                  }}
                  id="check-checkbox"
                />
                <label
                  htmlFor="check-checkbox"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Check this box
                </label>
              </div>
              {messages.check && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="check-message">{messages.check}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Uncheck */}
          <Card>
            <CardHeader>
              <CardTitle>Uncheck</CardTitle>
              <CardDescription>Test checkbox uncheck action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  data-testid="uncheck-checkbox"
                  defaultChecked
                  onCheckedChange={(checked) => {
                    if (!checked) {
                      showMessage("uncheck")
                    }
                  }}
                  id="uncheck-checkbox"
                />
                <label
                  htmlFor="uncheck-checkbox"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Uncheck this box
                </label>
              </div>
              {messages.uncheck && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="uncheck-message">{messages.uncheck}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Select Option */}
          <Card>
            <CardHeader>
              <CardTitle>Select Option</CardTitle>
              <CardDescription>Test select dropdown action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <select
                data-testid="select-dropdown"
                value={selectValue}
                onChange={(e) => {
                  setSelectValue(e.target.value)
                  showMessage("selectOption")
                }}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option value="option1" data-testid="select-option1">
                  Option 1
                </option>
                <option value="option2" data-testid="select-option2">
                  Option 2
                </option>
                <option value="option3" data-testid="select-option3">
                  Option 3
                </option>
              </select>
              {messages.selectOption && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="select-message">{messages.selectOption}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Press */}
          <Card>
            <CardHeader>
              <CardTitle>Press</CardTitle>
              <CardDescription>Test keyboard press action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                data-testid="press-input"
                placeholder="Press Enter key..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setPressedKey(e.key)
                    showMessage("press")
                  }
                }}
              />
              {messages.press && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="press-message">{messages.press}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Focus */}
          <Card>
            <CardHeader>
              <CardTitle>Focus</CardTitle>
              <CardDescription>Test focus action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                data-testid="focus-input"
                placeholder="Focus on this input..."
                onFocus={() => showMessage("focus")}
              />
              {messages.focus && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="focus-message">{messages.focus}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Blur */}
          <Card>
            <CardHeader>
              <CardTitle>Blur</CardTitle>
              <CardDescription>Test blur action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                data-testid="blur-input"
                placeholder="Focus then blur this input..."
                onBlur={() => showMessage("blur")}
              />
              {messages.blur && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="blur-message">{messages.blur}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Iframe */}
          <Card>
            <CardHeader>
              <CardTitle>Iframe</CardTitle>
              <CardDescription>Test locators inside iframe</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <iframe data-testid="test-iframe" src="/iframe-content" className="h-40 w-full rounded-md border" />
              {(messages["iframe-click"] || messages["iframe-fill"]) && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="iframe-message">{messages["iframe-click"] || messages["iframe-fill"]}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* File Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Set Input Files</CardTitle>
              <CardDescription>Test file upload action</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                data-testid="file-input"
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    setUploadedFile(file.name)
                    showMessage("setInputFiles")
                  }
                }}
              />
              {messages.setInputFiles && (
                <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                  <CheckCircle2 className="h-4 w-4" />
                  <span data-testid="file-message">
                    {messages.setInputFiles}
                    {uploadedFile && ` (${uploadedFile})`}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
