<template>
  <div>
    <h2 class="h2">Form Elements</h2>

    <p>The Fieldset:</p>
    <fieldset>
      <legend>Legend</legend>
      <p>The Form:</p>
      <form>

        <div class="form-group">
          <label for="text_field">Text Field:</label>
          <input type="text" id="text_field" />
        </div>

        <div class="form-group">
          <label for="text_field_disabled">Disabled Text Field:</label>
          <input type="text" id="text_field_disabled" disabled value="I'm disabled" />
        </div>

        <div class="form-group">
          <label for="text_field_readonly">Readonly Text Field:</label>
          <input type="text" id="text_field_readonly" readonly value="I'm readonly" />
        </div>

        <div class="form-group">
          <label for="text_area1">Text Area:</label>
          <textarea id="text_area1"></textarea>
        </div>

        <div class="form-group">
          <label for="text_area_disabled">Disabled Text Area:</label>
          <textarea id="text_area_disabled" disabled>I'm disabled</textarea>
        </div>

        <div class="form-group">
          <label for="text_area">Readonly Text Area:</label>
          <textarea id="text_area" readonly>I'm readonly</textarea>
        </div>

        <div class="form-group">
          <label for="select_element1">Select Element:</label>
          <select id="select_element1">
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
          </select>
        </div>

        <div class="form-group">
          <label for="select_element2">Option Groups:</label>
          <select id="select_element2">
            <optgroup label="Option Group 1">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </optgroup>
            <optgroup label="Option Group 2">
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3" disabled>Disabled Option</option>
            </optgroup>
          </select>
        </div>

        <div class="form-group">
          <label for="select_element_disabled">Disabled Select Element:</label>
          <select id="select_element_disabled" disabled>
            <option value="1">Unselectable Option</option>
            <option value="2">This option should not even be seen</option>
          </select>
        </div>

        <div class="form-group">
          <h3 class="h3">Radio Buttons:</h3>
          <ul>
            <li>
              <label for="radio_1">
                <input type="radio" class="radio" name="radio_button" value="radio_1" />Radio 1
              </label>
            </li>
            <li>
              <label for="radio_2">
                <input type="radio" class="radio" name="radio_button" value="radio_2" />Radio 2
              </label>
            </li>
            <li>
              <label for="radio_3">
                <input type="radio" class="radio" name="radio_button" value="radio_3" />Radio 3
              </label>
            </li>
            <li>
              <label for="radio_4">
                <input type="radio" class="radio" name="radio_button" value="radio_4" disabled />Radio 4
              </label>
            </li>
          </ul>
        </div>

        <div class="form-group">

          <h3 class="h3">Checkboxes:</h3>

          <ul>
            <li>
              <label for="check_1">
                <input type="checkbox" class="checkbox" id="check_1" value="check_1" />Checkbox 1
              </label>
            </li>
            <li>
              <label for="check_2">
                <input type="checkbox" class="checkbox" name="checkboxes" value="check_2" />Checkbox 2
              </label>
            </li>
            <li>
              <label for="check_3">
                <input type="checkbox" class="checkbox" name="checkboxes" value="check_3" />Checkbox 3
              </label>
            </li>
            <li>
              <label for="check_4">
                <input type="checkbox" class="checkbox" name="checkboxes" value="check_4" disabled />Checkbox 4
              </label>
            </li>
          </ul>
        </div>

        <div class="form-group">

          <h3 class="h3">Toggles:</h3>

          <ul>
            <li>
              <div class="form-group">
                <div class="toggle-label">Toggle label</div>
                <div class="toggle">
                  <input type="checkbox" id="switch" />
                  <label for="switch">Toggle</label>
                </div>
              </div>
            </li>
            <li>
              <div class="form-group">
                <div class="toggle-label">Toggle label</div>
                <div class="toggle">
                  <input type="checkbox" id="switch-2" />
                  <label for="switch-2">Toggle</label>
                </div>
              </div>
            </li>
            <li>
              <div class="form-group">
                <div class="toggle-label">Toggle label</div>
                <div class="toggle">
                  <input type="checkbox" id="switch-3" />
                  <label for="switch-3">Toggle</label>
                </div>
              </div>
            </li>
            <li>
              <div class="form-group">
                <div class="toggle-label">Toggle label</div>
                <div class="toggle">
                  <input type="checkbox" id="switch-4" />
                  <label for="switch-4">Toggle</label>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="password" id="password" />
        </div>

        <div class="form-group">
          <label for="file">File Input:</label>
          <input type="file" class="file" id="file" />
        </div>

        <h3 class="h3">HTML5-specific Form Elements</h3>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" />
        </div>

        <div class="form-group">
          <label for="url">URL:</label>
          <input type="url" id="url" />
        </div>

        <div class="form-group">
          <label for="tel">Telephone:</label>
          <input type="tel" id="tel" />
        </div>

        <div class="form-group">
          <label for="number">Number:</label>
          <input type="number" id="number" min="0" max="10" step="1" value="5" />
        </div>

        <div class="form-group">
          <label for="search">Search:</label>
          <input type="search" id="search" />
        </div>

        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" />
        </div>

        <div class="form-group">
          <label for="time">Time:</label>
          <input type="time" id="time" />
        </div>

        <div class="form-group">
          <label for="color">Color:</label>
          <input type="color" id="color" />
        </div>

        <div class="form-group">
          <label for="datalist">Datalist:</label>
          <input list="browsers" name="browser" type="datalist" id="datalist" />
          <datalist id="browsers">
            <option value="Internet Explorer" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
        </div>

        <div class="form-group">
          <label for="range">Range:</label>
          <input type="range" id="range" name="points" min="1" max="10" />
        </div>

        <div class="form-group">
          <label for="output">Output:</label>
          <output name="result" id="output">42</output>
        </div>

        <div class="form-group">
          <label for="progress">Progress:</label>
          <progress id="progress" value="65" max="100"></progress>
        </div>

        <div class="form-group">
          <label for="meter">Meter:</label>
          <meter id="meter" min="200" max="500" value="350">350 degrees</meter>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>